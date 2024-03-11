"use client";

import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Button from "@/components/shared/Button";
import FormInput from "@/components/shared/FormComponents/formInput/FormInput";
import DevRiserCheckbox from "@/components/shared/Checkbox";
import RadioButton from "@/components/shared/RadioButton";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import Prompt from "@/components/shared/Prompts/Prompt";
import UploadModal from "../CircularLoader/CircularLoader";
import { useTheme } from "next-themes";
import Loader from "../Loader/Loader";
import { AddTopicTypes, BlogEditorTypes } from "../BlogEditor/blogEditorTypes";

export default function CaseStudyEditor() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("Your Case Study Title");
  const [summary, setSummary] = useState("");
  const [selectedRadio1, setSelectedRadio1] = useState<number>(1);
  const [addTopicModal, setAddTopicModal] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [showTitleRequiredMessage, setShowTitleRequiredMessage] =
    useState(false);
  const [showEditorRequiredMessage, setShowEditorRequiredMessage] =
    useState(false);
  const [showTopicsRequiredMessage, setShowTopicsRequiredMessage] =
    useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadFileName, setUploadFileName] = useState<string | null>(null);
  const [uploadFileSize, setUploadFileSize] = useState<number | null>(null);
  const [filePath, setFilePath] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const themes = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        addTopicModal &&
        !event.target.closest(".add-topic-modal-container")
      ) {
        setAddTopicModal(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [addTopicModal]);

  const {
    data: topicsData,
    error: topicsError,
    isLoading: topicsIsLoading,
  } = useQuery("topics", async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/add-case-study-topic"
      );
      if (!response.ok) {
        throw new Error(`Error fetching topics: ${response.statusText}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("An error occurred while fetching topics:", error);
      throw error;
    }
  });

  const apiUrlUpload = process.env.NEXT_PUBLIC_UPLOAD_FILE || "";

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileInput = event.target;
    const file = fileInput.files?.[0];

    if (file) {
      try {
        setIsUploading(true);

        const formData = new FormData();
        formData.append("file", file);
        setUploadFileName(file.name);
        setUploadFileSize(file.size);

        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener("progress", (e: ProgressEvent) => {
          if (e.lengthComputable) {
            const progress = Math.round((e.loaded / e.total) * 100);
            setUploadProgress(progress);
          }
        });

        xhr.open("POST", apiUrlUpload, true);

        xhr.onload = () => {
          if (xhr.status === 200 || xhr.status === 201) {
            try {
              const result = JSON.parse(xhr.responseText);
              if (result.status === "success") {
                toast.custom((t) => (
                  <Prompt
                    t={t}
                    type="success"
                    text="Image Uploaded Successfully"
                  />
                ));
                const { file_url } = result.data;
                setFilePath(file_url);
              } else {
                console.error("File upload failed");
              }
            } catch (error) {
              console.error("Error parsing response:", error);
            }
          } else {
            console.error("File upload failed");
          }

          setIsUploading(false);
          setUploadProgress(0);
        };

        xhr.send(formData);
      } catch (error) {
        console.error("An error occurred during file upload:", error);
        setIsUploading(false);
        setUploadProgress(0);
      }
    }
  };

  const handleTopicCheckboxChange = (topic: string) => {
    setSelectedTopics((prevSelectedTopics) => {
      if (prevSelectedTopics.includes(topic)) {
        return prevSelectedTopics.filter(
          (selectedTopic) => selectedTopic !== topic
        );
      } else {
        return [...prevSelectedTopics, topic];
      }
    });
  };

  const {
    register: modalRegister,
    handleSubmit: handleModalSubmit,
    formState: { errors: modalErrors, isSubmitting: modalIsSubmitting },
  } = useForm<AddTopicTypes>();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BlogEditorTypes>();

  const handleRadioChange1 = (id: any) => {
    setSelectedRadio1(id);
  };

  const handleAddTopicModal = () => {
    setAddTopicModal(true);
  };

  const handleAddTopicSubmit = async (data: any) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/add-case-study-topic",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ topic: data.topic }),
        }
      );

      if (response.ok) {
        console.log("Topic added successfully!");
      } else {
        console.error("Error adding topic:", response.statusText);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    } finally {
      setAddTopicModal(false);
    }
  };

  const radioTextArr1 = [
    {
      question: "Website",
      options: [
        { id: 1, label: "Devriser English" },
        {
          id: 2,
          label: "Devriser French",
        },
        {
          id: 3,
          label: "Devriser Chinese",
        },
        {
          id: 4,
          label: "Devriser Arabic",
        },
      ],
    },
  ];

  const handleSaveDraft = async () => {
    try {
      const postData = {
        title,
        summary,
        content: text,
        website: selectedRadio1,
        topics: selectedTopics,
        bannerImage: filePath,
        isDraft: true,
      };

      const response = await fetch("http://localhost:3000/api/case-study", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log("Draft saved successfully!");
        setTitle("");
        setSummary("");
        setText("");
        setSelectedRadio1(1);
        setSelectedTopics([]);
        setFilePath(null);
        setUploadFileName(null);
        setUploadFileSize(null);
        setUploadProgress(0);
        setShowTitleRequiredMessage(false);
        setShowEditorRequiredMessage(false);
        setShowTopicsRequiredMessage(false);
        setAddTopicModal(false);
        toast.custom((t) => (
          <Prompt t={t} type="success" text="Case Study Post Submitted" />
        ));
      } else {
        console.error("Error saving draft:", response.statusText);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  const onSubmit = async (data: BlogEditorTypes) => {
    try {
      if (!title.trim()) {
        setShowTitleRequiredMessage(true);
        return;
      } else {
        setShowTitleRequiredMessage(false);
      }

      if (!text.trim()) {
        setShowEditorRequiredMessage(true);
        return;
      } else {
        setShowEditorRequiredMessage(false);
      }

      if (selectedTopics.length === 0) {
        setShowTopicsRequiredMessage(true);
        return;
      } else {
        setShowTopicsRequiredMessage(false);
      }
      const postData = {
        title,
        summary,
        content: text,
        website: selectedRadio1,
        topics: selectedTopics,
        bannerImage: filePath,
        isDraft: false,
      };

      console.log("Submitting the following data:", postData);

      const response = await fetch("http://localhost:3000/api/case-study", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log("Blog post submitted successfully!");
        setTitle("");
        setSummary("");
        setText("");
        setSelectedRadio1(1);
        setSelectedTopics([]);
        setFilePath(null);
        setUploadFileName(null);
        setUploadFileSize(null);
        setUploadProgress(0);
        setShowTitleRequiredMessage(false);
        setShowEditorRequiredMessage(false);
        setShowTopicsRequiredMessage(false);
        setAddTopicModal(false);
        toast.custom((t) => (
          <Prompt t={t} type="success" text="Blog Post Submitted" />
        ));
      } else {
        console.error("Error submitting blog post:", response.statusText);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  function formatFileSize(size: number | null): string {
    if (size === null) return "";
    const units = ["B", "KB", "MB", "GB", "TB"];
    let i = 0;
    while (size >= 1024 && i < units.length - 1) {
      size /= 1024;
      i++;
    }
    return `${size.toFixed(2)} ${units[i]}`;
  }

  const handleSummaryChange = (e: any) => {
    setSummary(e.target.value);
  };

  return (
    <div className="flex gap-4 p-4 h-full relative">
      <div className="flex-[5] flex flex-col gap-4 p-4 bg-dashboard-bg rounded-large h-full">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setShowTitleRequiredMessage(false);
          }}
          className="text-2xl font-bold p-2 outline-none bg-transparent"
          placeholder="Your Case Study Title"
        />
        {showTitleRequiredMessage && (
          <div className="text-red-500 text-sm">
            Please give case study a title*
          </div>
        )}
        <textarea
          value={summary}
          onChange={handleSummaryChange}
          className="resize-none bg-dashboard-input ps-2 rounded-large pt-1"
          placeholder="Summary"
        />
        <Editor
          apiKey="r33er8qxj1nsjkgm8hwbpiebzd45gxndoba4b9kh4jb2qit8"
          onInit={(evt, editor) => setText(editor.getContent())}
          onEditorChange={(newValue: any, editor: any) => {
            setText(editor.getContent());
            setShowEditorRequiredMessage(false);
          }}
          initialValue="<p>Start Writing the Case Study.</p>"
          init={{
            content_css: "",
            resize: false,
            height: "100%",
            menubar: false,
            branding: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
              "fullscreen",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | image | fullscreen | media | " +
              "removeformat | help",
            content_style: `body { font-family:Helvetica,Arial,sans-serif,monaSans; font-size:14px;}`,
          }}
        />
        {showEditorRequiredMessage && (
          <div className="text-red-500 text-sm">
            Case Study content is required.*
          </div>
        )}
      </div>
      <div className="flex flex-col w-full gap-4 flex-1 ">
        <div className="flex gap-4 justify-end">
          <Button style="outlined" variant="primary" onClick={handleSaveDraft}>
            Save Draft
          </Button>
          <Button
            style="solid"
            variant="success"
            onClick={() => {
              setShowTitleRequiredMessage(false);
              setShowEditorRequiredMessage(false);
              handleSubmit(onSubmit)();
            }}
            loading={isSubmitting}
          >
            Publish
          </Button>
        </div>

        <div className="bg-dashboard-bg h-full p-2 rounded-large flex flex-col gap-6 overflow-auto">
          <div className="gap-3 flex flex-col ">
            <div className="flex gap-4  items-center justify-between ps-1 add-topic-modal-container">
              <h3 className="text-secondary-reverse font-medium text-text-subtitle whitespace-nowrap">
                Choose Topics
              </h3>
              <div
                className="text-solid-blue text-xs font-medium whitespace-nowrap cursor-pointer"
                onClick={handleAddTopicModal}
              >
                <span>+ ADD TOPIC</span>
                {addTopicModal && (
                  <form
                    onSubmit={handleModalSubmit(handleAddTopicSubmit)}
                    className=" absolute w-[20%] z-50 top-[120px] items-center border right-5 flex  gap-2 bg-dashboard-bg p-2 rounded-large"
                  >
                    <FormInput
                      inputType="textarea"
                      placeHolder="Write Here"
                      dashboard
                      labelColumn
                      type="text"
                      register={modalRegister}
                      registerValue={"topic"}
                      required
                      registerReq
                    />
                    <Button
                      type="submit"
                      variant="success"
                      style="solid"
                      className="text-[24px]"
                      loading={modalIsSubmitting}
                    >
                      +
                    </Button>
                  </form>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-dashboard-light-bg p-2 rounded-large whitespace-nowrap">
              <div className="flex flex-col gap-3">
                {topicsIsLoading && (
                  <div className="flex w-full justify-center items-center">
                    <Loader />
                  </div>
                )}
                {topicsData &&
                  topicsData.length > 0 &&
                  topicsData.map((topic: any) => (
                    <DevRiserCheckbox
                      key={topic.id}
                      label={topic.topic}
                      checked={selectedTopics.includes(topic.topic)}
                      onChange={() => handleTopicCheckboxChange(topic.topic)}
                    />
                  ))}
              </div>
            </div>
            {showTopicsRequiredMessage && (
              <p className="text-red-500 text-sm ps-2">
                At least one topic is required*
              </p>
            )}
          </div>
          <div className="gap-3 flex flex-col ">
            <div className="flex gap-4  items-center justify-between">
              <h3 className="text-secondary-reverse font-medium text-text-subtitle whitespace-nowrap ps-1">
                Website
              </h3>
            </div>
            <div className="flex flex-col gap-3 bg-dashboard-light-bg p-2 rounded-large whitespace-nowrap">
              <div className="flex flex-col gap-3">
                {radioTextArr1[0].options.map(({ id, label }) => (
                  <RadioButton
                    key={`rule-${id}`}
                    id={id}
                    checked={selectedRadio1 === id}
                    onChange={() => handleRadioChange1(id)}
                    label={label}
                    name={`rule-${id}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="gap-3 flex flex-col ">
            <div className="flex gap-4  items-center justify-between">
              <h3 className="text-secondary-reverse font-medium text-text-subtitle whitespace-nowrap ps-1">
                Banner Image
              </h3>
            </div>
            <label className="cursor-pointer max-w-[15em] overflow-auto">
              <div className="flex flex-col gap-3 bg-dashboard-light-bg p-2 rounded-large whitespace-nowrap">
                <input
                  type="file"
                  onChange={handleFileChange}
                  hidden
                  className="file:border-2 file:border-dashboard-input file:w-fit file:text-solid-blue file:outline-none file:bg-transparent file:rounded-large file:shadow-none"
                />
                <div className="flex gap-1 items-center">
                  <p className="border border-table-border rounded-large p-1 text-solid-blue">
                    Choose File
                  </p>

                  <p>{uploadFileName ? uploadFileName : "No file chosen"}</p>
                </div>
                <div>
                  {!isUploading && filePath && (
                    <div>
                      Uploaded - {uploadFileName} (
                      {formatFileSize(uploadFileSize)})
                    </div>
                  )}
                  {isUploading && (
                    <div>
                      Uploading - {uploadFileName} (
                      {formatFileSize(uploadFileSize)})
                    </div>
                  )}
                </div>
                <UploadModal
                  uploading={isUploading}
                  progress={uploadProgress}
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
