"use client";

import React, { useEffect, useState } from "react";
import FormInput from "../FormComponents/formInput/FormInput";
import CustomPhoneInput from "../FormComponents/phone-input/CustomPhoneInput";
import Select from "../FormComponents/form-select/Select";
import { countriesNameData } from "./countriesNameData";
import RadioButton from "../FormComponents/RadioButton";
import FileIcon from "./FileIcon";
import Button from "../Button";
import { useController, useForm } from "react-hook-form";
import { ContactFormTypes } from "./contactFormTypes";
import Prompt from "../Prompts/Prompt";
import toast from "react-hot-toast";
import { getLocales } from "../../../../getLocales";
import {
  CallIconContact,
  InqueryIcon,
  MailIconContact,
  SkypeIcon,
} from "@/assets/svg/ContactUsSvg";

interface LocaleData {
  contactForm: {
    formContent: {
      headingOne: string;
      headingTwo: string;
      headingThree: string;
      headingFour: string;
      headingFive: string;
    };
    projects: {
      projetOne: string;
      projetTwo: string;
      projetThree: string;
      projetFour: string;
      projetFive: string;
      projetSix: string;
      projetSeven: string;
      projetEight: string;
      projetNine: string;
    };
    involvement: {
      involvementOne: string;
      involvementTwo: string;
      involvementThree: string;
    };
    budget: {
      budgetOne: string;
      budgetTwo: string;
      budgetThree: string;
      budgetFour: string;
      budgetFive: string;
      budgetSix: string;
    };
    progressBar: {
      headingOne: string;
      headingTwo: string;
      headingThree: string;
      subHeadingOne: string;
      subHeadingTwo: string;
      subHeadingThree: string;
    };
    documents: {
      headingOne: string;
      headingTwo: string;
      headingThree: string;
      headingFour: string;
    };
    fieldContent: {
      fullname: string;
      email: string;
      phone: string;
      country: string;
      uploadDocument: string;
      fileName: string;
      uploadingFile: string;
      descriptionPlaceHolder: string;
      submitButton: string;
      popupText: string;
      popupTextFile: string;
    };
  };
}

interface FormProps {
  params: { lang: string };
}

export default function ContactUsForm({ params }: FormProps) {
  const [active, setActive] = useState<number | null>(null);
  const [budgetActive, setBudgetActive] = useState<number | null>(null);
  const [selectedRadio1, setSelectedRadio1] = useState<number>(1);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadFileName, setUploadFileName] = useState<string | null>(null);
  const [uploadFileSize, setUploadFileSize] = useState<number | null>(null);
  const [filePath, setFilePath] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const [lang, setLang] = useState<LocaleData | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormTypes>();

  const { field: country } = useController({
    name: "country",
    control,
    rules: { required: true },
  });

  const { field: phone } = useController({
    name: "phone",
    control,
    rules: { required: true },
  });

  const handleProjectClick = (index: any) => {
    setActive(index === active ? null : index);
  };
  const handleBudgetClick = (index: any) => {
    setBudgetActive(index === budgetActive ? null : index);
  };

  const handleRadioChange1 = (id: any) => {
    setSelectedRadio1(id);
  };

  const apiUrlContact = process.env.NEXT_PUBLIC_SUBMIT_CONTACT_FORM || "";
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

        const response = await fetch(apiUrlUpload, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();

          if (result.status === "success") {
            {
              toast.custom((t) => (
                <Prompt
                  t={t}
                  type="success"
                  text={lang?.contactForm.fieldContent.popupTextFile}
                />
              ));
            } // Display success toast
            const { file_url } = result.data;
            setFilePath(file_url);
          } else {
            console.error("File upload failed");
          }
        } else {
          console.error("File upload failed");
        }
      } catch (error) {
        console.error("An error occurred during file upload:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const onSubmit = async (data: ContactFormTypes) => {
    if (active === null || budgetActive === null) {
      setValidationError("Please select options for Project and Budget");
      return;
    }

    const projectTypeAnswer = projectType[0].answers[active!]?.name || "";
    const radioTextAnswer =
      radioTextArr1[0].options.find((option) => option.id === selectedRadio1)
        ?.label || "";
    const budgetAnswer = budget[0].answers[budgetActive!]?.name || "";

    const faq = {
      "2. What is your next project about?": projectTypeAnswer,
      "3. What will be our involvement in your project?": radioTextAnswer,
      "4. What is your approximate budget (in USD)?": budgetAnswer,
    };

    const mergedData = {
      ...data,
      faq: faq,
      document: filePath,
    };

    try {
      const response = await fetch(apiUrlContact, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mergedData),
      });

      if (response.ok) {
        reset();
        setFilePath(null);
        setUploadFileName(null);
        setUploadFileSize(null);
        setActive(null);
        setBudgetActive(null);
        setSelectedRadio1(1);
        setValidationError(null);
        <div>
          {toast.custom((t) => (
            <Prompt
              t={t}
              type="success"
              text={lang?.contactForm.fieldContent.popupText}
            />
          ))}
        </div>;
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
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

  useEffect(() => {
    const fetchData = async () => {
      const locales = await getLocales(params.lang);
      setLang(locales);
    };

    fetchData();
  }, [params.lang]);

  if (!lang) {
    return null;
  }

  const projectType = [
    {
      question: lang.contactForm.formContent.headingTwo,
      answers: [
        { name: lang.contactForm.projects.projetOne },
        { name: lang.contactForm.projects.projetTwo },
        { name: lang.contactForm.projects.projetThree },
        { name: lang.contactForm.projects.projetFour },
        { name: lang.contactForm.projects.projetFive },
        { name: lang.contactForm.projects.projetSix },
        { name: lang.contactForm.projects.projetSeven },
        { name: lang.contactForm.projects.projetEight },
        { name: lang.contactForm.projects.projetNine },
      ],
    },
  ];

  const radioTextArr1 = [
    {
      question: lang.contactForm.formContent.headingThree,
      options: [
        { id: 1, label: lang.contactForm.involvement.involvementOne },
        {
          id: 2,
          label: lang.contactForm.involvement.involvementTwo,
        },
        {
          id: 3,
          label: lang.contactForm.involvement.involvementThree,
        },
      ],
    },
  ];

  const budget = [
    {
      question: lang.contactForm.formContent.headingFour,
      answers: [
        { name: lang.contactForm.budget.budgetOne },
        { name: lang.contactForm.budget.budgetTwo },
        { name: lang.contactForm.budget.budgetThree },
        { name: lang.contactForm.budget.budgetFour },
        { name: lang.contactForm.budget.budgetFive },
        { name: lang.contactForm.budget.budgetSix },
      ],
    },
  ];

  const progressArr = [
    {
      number: "1",
      heading: lang.contactForm.progressBar.headingOne,
      subHeading: lang.contactForm.progressBar.subHeadingOne,
    },
    {
      number: "2",
      heading: lang.contactForm.progressBar.headingTwo,
      subHeading: lang.contactForm.progressBar.subHeadingTwo,
    },
    {
      number: "3",
      heading: lang.contactForm.progressBar.headingThree,
      subHeading: lang.contactForm.progressBar.subHeadingThree,
    },
  ];

  const socialLinksArr = [
    {
      icon: <MailIconContact />,
      heading: "Sales & Marketing",
      subHeading1: "hello@devriser.com",
      subHeading2: "",
    },
    {
      icon: <SkypeIcon />,
      heading: "Skype",
      subHeading1: "Devriser",
      subHeading2: "",
    },
    {
      icon: <InqueryIcon />,
      heading: "HR Inquiry",
      subHeading1: "hr@devriser.com",
      subHeading2: "+1 123-123-1212 (US)",
    },
    {
      icon: <CallIconContact />,
      heading: "Sales Inquiry",
      subHeading1: "+1 123-123-1212 (US)",
      subHeading2: "+1 123-123-1212 (US)",
    },
  ];

  return (
    <div className="flex flex-col gap-8 pb-8">
      <div className="flex gap-8">
        <form
          className="flex flex-col gap-8 flex-[2]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="bg-secondary p-5 flex flex-col gap-4 ">
            <p className="text-text-title font-medium">
              {lang.contactForm.formContent.headingOne}
            </p>
            <div className="flex flex-col  gap-2">
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <FormInput
                  label={lang.contactForm.fieldContent.fullname}
                  labelColumn
                  register={register}
                  registerValue="fullName"
                  error={errors.fullName}
                  registerReq
                />
                <FormInput
                  label={lang.contactForm.fieldContent.email}
                  labelColumn
                  register={register}
                  registerValue="email"
                  error={errors.email}
                  registerReq
                  type="email"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <CustomPhoneInput
                  label={lang.contactForm.fieldContent.phone}
                  onChange={({ formattedValue }) => {
                    phone.onChange(formattedValue!);
                  }}
                  params={params}
                />
                <Select
                  label={lang.contactForm.fieldContent.country}
                  options={countriesNameData}
                  values={country.value}
                  onChange={(value) => {
                    country.onChange(value);
                  }}
                  error={errors.country}
                  showSelectedOptions
                  labelColumn
                  searchable
                />
              </div>
            </div>
          </div>
          <div className="bg-secondary p-5 flex flex-col gap-4">
            <p className="text-text-title font-medium">
              {projectType[0].question}
            </p>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-lg:grid-cols-2">
              {projectType[0].answers.map((project, index) => (
                <div
                  key={project.name}
                  className={`flex p-4 justify-center cursor-pointer ${
                    index === active
                      ? "bg-solid-blue text-primary"
                      : "bg-primary"
                  }`}
                  onClick={() => handleProjectClick(index)}
                >
                  <span>{project.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-secondary p-5 flex flex-col gap-4">
            <p className="text-text-title font-medium">
              {radioTextArr1[0].question}
            </p>
            <div className="flex flex-col gap-4">
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

          <div className="bg-secondary p-5 flex flex-col gap-4">
            <p className="text-text-title font-medium">{budget[0].question}</p>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-lg:grid-cols-2">
              {budget[0].answers.map((budgetOption, index) => (
                <div
                  key={budgetOption.name}
                  className={`flex p-4 justify-center cursor-pointer ${
                    index === budgetActive
                      ? "bg-solid-blue text-primary"
                      : "bg-primary"
                  }`}
                  onClick={() => handleBudgetClick(index)}
                >
                  <span>{budgetOption.name}</span>
                </div>
              ))}
            </div>
          </div>
          {validationError && <p className="text-red-500">{validationError}</p>}
          <div className="bg-secondary p-5 flex flex-col gap-4">
            <p className="text-text-title font-medium">
              {lang.contactForm.formContent.headingFive}
            </p>

            <div>
              <FormInput
                inputType="textarea"
                placeHolder={
                  lang.contactForm.fieldContent.descriptionPlaceHolder
                }
                labelColumn
                row={4}
                register={register}
                registerValue="description"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="cursor-pointer">
                <div className="bg-primary rounded flex  p-1 py-2 cursor-pointer ps-4 gap-2">
                  <input type="file" hidden onChange={handleFileChange} />
                  <div className="flex flex-col ">
                    <FileIcon />
                  </div>
                  <div>
                    <p className="ps-[3px] text-secondary-reverse">
                      {lang.contactForm.fieldContent.uploadDocument}
                    </p>
                    {!isUploading && filePath && (
                      <div>
                        {lang.contactForm.fieldContent.fileName}{" "}
                        {uploadFileName} ({formatFileSize(uploadFileSize)})
                      </div>
                    )}
                    {isUploading && (
                      <div>
                        {lang.contactForm.fieldContent.uploadingFile}{" "}
                        {uploadFileName} ({formatFileSize(uploadFileSize)})
                      </div>
                    )}
                  </div>
                </div>
              </label>
              <div className="flex gap-2 flex-col pt-3">
                <p>{lang.contactForm.documents.headingOne}</p>
                <div className="flex gap-1 items-center">
                  <p>{lang.contactForm.documents.headingTwo}</p>
                  <div
                    className="text-solid-blue"
                    // href={`/${params.lang}/nda`}
                  >
                    {lang.contactForm.documents.headingThree}
                  </div>
                  <p>{lang.contactForm.documents.headingFour}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                variant="success"
                style="solid"
                type="submit"
                loading={isSubmitting}
              >
                {lang.contactForm.fieldContent.submitButton}
              </Button>
            </div>
          </div>
        </form>
        <div className="flex-1 flex flex-col justify-between max-md:hidden">
          {progressArr.map((item, index) => (
            <div key={index} className="flex gap-3  relative h-full ">
              <p className="bg-blue-gradient p-2 px-3 text-white flex items-center font-medium h-fit z-20">
                {item.number}
              </p>
              {index < progressArr.length - 1 && (
                <div
                  className={`absolute top-0 h-full ${
                    params.lang === "ar" ? "right-4" : "left-4"
                  }  z-10 w-[2px] bg-solid-blue translate-x-[-50%]`}
                ></div>
              )}
              <div className="flex flex-col whitespace-pre-wrap gap-2">
                <p className=" font-medium">{item.heading}</p>
                <p className="opacity-70">{item.subHeading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="grid grid-cols-4 gap-8 justify-center max-md:grid-cols-1 max-lg:grid-cols-2">
        {socialLinksArr.map((item, index) => (
          <div key={index} className="flex gap-4 bg-secondary p-3 items-center">
            {item.icon}

            <div>
              <p className="font-medium first-letter:">{item.heading}</p>
              <p>{item.subHeading1}</p>
              <p>{item.subHeading2}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
