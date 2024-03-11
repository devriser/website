"use client";

import Button from "@/components/shared/Button";
import Select from "@/components/shared/FormComponents/form-select/Select";
import FormInput from "@/components/shared/FormComponents/formInput/FormInput";
import Prompt from "@/components/shared/Prompts/Prompt";
import React, { useState } from "react";
import toast from "react-hot-toast";
import UploadModal from "../CircularLoader/CircularLoader";
import Image from "next/image";
import ImageUploadIcon from "./ImageUploadIcon";
import { useForm } from "react-hook-form";
import { UserManagementTypes } from "./userTypes";
import { useMutation } from "react-query";

export default function UserManagementMain() {
  const [imageUploading, setImageUploading] = useState(false);
  const [filePath, setFilePath] = useState<string | null>(null);
  const [imageuploadProgress, setImageUploadProgress] = useState<number>(0);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const apiUrlUpload = process.env.NEXT_PUBLIC_UPLOAD_FILE || "";
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileInput = event.target;
    const file = fileInput.files?.[0];

    if (file) {
      try {
        setImageUploading(true);

        const formData = new FormData();
        formData.append("file", file);

        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener("progress", (e: ProgressEvent) => {
          if (e.lengthComputable) {
            const progress = Math.round((e.loaded / e.total) * 100);
            setImageUploadProgress(progress);
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
                setAvatarPreview(file_url);
              } else {
                console.error("File upload failed");
              }
            } catch (error) {
              console.error("Error parsing response:", error);
            }
          } else {
            console.error("File upload failed");
          }

          setImageUploading(false);
          setImageUploadProgress(0);
        };

        xhr.send(formData);
      } catch (error) {
        console.error("An error occurred during file upload:", error);
        setImageUploading(false);
        setImageUploadProgress(0);
      }
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserManagementTypes>();

  const createUserData = async (data: UserManagementTypes) => {
    const response = await fetch("/api/user-management", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        profileImage: filePath,
        role: selectedRole,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }

    throw new Error("Failed to create user data");
  };

  const mutation = useMutation(createUserData, {
    onSuccess: () => {
      toast.success("User created successfully");
      reset();
    },
    onError: (error) => {
      toast.error("Failed to create user data");
      console.error("Error creating user data:", error);
    },
  });

  const onSubmitData = async (data: UserManagementTypes) => {
    mutation.mutate(data);
  };
  return (
    <form className="flex h-full" onSubmit={handleSubmit(onSubmitData)}>
      <div className="p-5 flex-1 h-full">
        <div className="flex flex-col p-4 bg-dashboard-bg rounded-banner-rounded gap-4 h-full overflow-auto">
          <h2 className="text-text-title font-medium text-secondary-reverse">
            Member’s Social Media
          </h2>
          {avatarPreview ? (
            <Image
              src={avatarPreview}
              alt="Avatar Preview"
              className="rounded-full mt-2"
              height={100}
              width={100}
            />
          ) : (
            <label className="cursor-pointer w-fit">
              <div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  hidden
                  accept=".jpg, .jpeg, .png, .webp"
                  className="file:border-2 file:border-dashboard-input file:w-fit file:text-solid-blue file:outline-none file:bg-transparent file:rounded-large file:shadow-none"
                />
                <div className="flex gap-1 items-center">
                  <ImageUploadIcon />
                </div>
                <UploadModal
                  uploading={imageUploading}
                  progress={imageuploadProgress}
                />
              </div>
            </label>
          )}
          <FormInput
            label="First Name"
            register={register}
            registerValue={"firstName"}
            error={errors.firstName}
            dashboard
            labelColumn
            registerReq
          />
          <FormInput
            label="Last Name"
            register={register}
            registerValue={"lastName"}
            error={errors.lastName}
            dashboard
            labelColumn
          />
          <FormInput
            label="LinkedIn"
            register={register}
            registerValue={"linkdin"}
            dashboard
            labelColumn
          />
          <FormInput
            label="Dribble"
            register={register}
            registerValue={"dribble"}
            dashboard
            labelColumn
          />
          <FormInput
            label="Behance"
            register={register}
            registerValue={"behance"}
            dashboard
            labelColumn
          />
        </div>
      </div>
      <div className="p-5 flex-[2] h-full overflow-auto">
        <div className="flex flex-col p-4 bg-dashboard-bg rounded-banner-rounded gap-4 h-full">
          <h2 className="text-text-title font-medium text-secondary-reverse">
            Account
          </h2>
          <div className="flex gap-4">
            <FormInput
              label="Email ID"
              type="email"
              register={register}
              registerValue={"email"}
              dashboard
              labelColumn
              error={errors.email}
              registerReq
            />
            <FormInput
              label="Phone"
              type="number"
              register={register}
              registerValue={"phone"}
              dashboard
              labelColumn
              error={errors.phone}
              registerReq
            />
          </div>
          <div className="flex gap-4">
            <FormInput
              label="Designation"
              register={register}
              registerValue={"designation"}
              dashboard
              labelColumn
            />
            <Select
              onChange={(selected) => setSelectedRole(selected)}
              options={[
                "Blog Writer",
                "Case Study Writer",
                "Portfolio Writer",
                "Website Traffic Management",
                "Lead Management",
                "User Management",
              ]}
              values={selectedRole}
              label="Role"
              labelColumn
              placeholder="select role"
            />
          </div>
          <div className="flex gap-4">
            <FormInput
              label="Address"
              register={register}
              registerValue={"address"}
              dashboard
              labelColumn
            />
            <FormInput
              label="Country"
              register={register}
              registerValue={"country"}
              dashboard
              labelColumn
            />
          </div>
          <div className="flex gap-4">
            <FormInput
              label="City"
              register={register}
              registerValue={"city"}
              dashboard
              labelColumn
            />
          </div>
          <FormInput
            register={register}
            registerValue={"aboutCompany"}
            label="About Company"
            labelColumn
            userDashBoard
            inputType="textarea"
          />
          <div className="flex justify-end items-end h-full">
            <Button
              style="solid"
              variant="success"
              type="submit"
              loading={isSubmitting}
            >
              Create User
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
