"use client";
import Loader from "@/components/DashboardComponent/Loader/Loader";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { BehanceIcon, DribbleIcon, LinkdinIcon } from "./Icons";
import Button from "@/components/shared/Button";
import { useForm } from "react-hook-form";
import FormInput from "@/components/shared/FormComponents/formInput/FormInput";
import toast from "react-hot-toast";

type PasswordProps = {
  currentPassword: string;
  newPassword: string;
};

export default function Profile() {
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [isPasswordChanging, setIsPasswordChanging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PasswordProps>();

  async function handleChangePassword(data: PasswordProps) {
    try {
      setIsPasswordChanging(true);
      const response = await fetch(
        "http://localhost:3000/api/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setIsModalOpen(false);
      if (response.ok) {
        console.log("Password changed successfully");
        toast.success("Password changed successfully");
        setCurrentPassword("");
        setNewPassword("");
      }

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message);
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error("Error changing password:");
    } finally {
      setIsPasswordChanging(false);
    }
  }
  const fetchUserData = async () => {
    const response = await fetch("http://localhost:3000/api/login");
    if (!response.ok) {
      toast.error("Error fetching user data");
      throw new Error("Error fetching user data");
    }
    return response.json();
  };

  const { data, isLoading, isError } = useQuery("userData", fetchUserData);

  if (isLoading) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex w-full h-full justify-center items-center text-text-hero font-medium">
        Oopssss.....
        <br />
        Error fetching user data
      </div>
    );
  }

  const handleCloseModal = () => {
    reset(); // Reset the form when closing the modal
    setIsModalOpen(false);
  };

  return (
    <div className=" flex h-full">
      <div className="p-4 justify-center flex w-fit">
        <div className="flex  flex-col gap-3 justify-center">
          <div className="bg-dashboard-table  p-5 rounded-banner-rounded whitespace-nowrap flex flex-col gap-5">
            <h2 className="text-text-title font-medium text-center">
              Member Social Card
            </h2>
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={100}
                src={data.profileImage}
                alt="Profile"
                className="rounded-full border border-secondary-reverse"
              />
            </div>
            <div>
              <p className="text-2xl font-medium text-center mt-2">
                {data.username}
              </p>
              <p className="text-secondary-reverse opacity-60 mb-1">
                {data.email}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <p className="font-medium">Contact:</p>
                <p className="text-light-secondary">{data.phone}</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="font-medium">Role:</p>
                <p className="text-light-secondary">{data.role}</p>
              </div>
              <div className="flex gap-2 whitespace-nowrap">
                <p className="font-medium">Designation:</p>
                <p className="text-light-secondary">{data.designation}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mt-2 ">
              <Link href={`${data.linkdin}`} target="_blank">
                <LinkdinIcon />
              </Link>
              <Link href={`${data.linkdin}`} target="_blank">
                <DribbleIcon />
              </Link>
              <Link href={`${data.linkdin}`} target="_blank">
                <BehanceIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dashboard-table w-full p-4 px-8 h-full overflow-auto">
        <div className="flex flex-col gap-6 h-full">
          <h2 className="text-text-title font-medium ">Account</h2>
          <div className="flex  flex-col gap-5">
            <div className="flex">
              <div className="flex flex-col flex-1">
                <span className="text-light-secondary font-medium">
                  Email ID
                </span>
                <span>{data.email}</span>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-light-secondary font-medium">Phone</span>
                <span>{data.phone}</span>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col flex-1">
                <span className="text-light-secondary font-medium">
                  Designation
                </span>
                <span>{data.designation}</span>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-light-secondary font-medium">Role</span>
                <span>{data.phone}</span>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col flex-1">
                <span className="text-light-secondary font-medium">
                  Country
                </span>
                <span>{data.country}</span>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-light-secondary font-medium">City</span>
                <span>{data.city}</span>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col flex-1">
                <span className="text-light-secondary font-medium">
                  Address
                </span>
                <span>{data.address}</span>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col flex-1">
                <span className="text-light-secondary font-medium">
                  About Company
                </span>
                <span>{data.aboutCompany}</span>
              </div>
            </div>
          </div>
          {data.role === "admin" ? (
            ""
          ) : (
            <div className="flex justify-end items-end h-full">
              <Button
                style="solid"
                variant="success"
                onClick={() => setIsModalOpen(true)}
              >
                Change Password
              </Button>
            </div>
          )}
        </div>
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50">
            <div className="bg-dashboard-table p-6 rounded-md w-[30%] border border-dashboard-table">
              <form
                onSubmit={handleSubmit(handleChangePassword)}
                className="flex flex-col gap-4"
              >
                <h2 className="text-text-title font-medium">Change Password</h2>
                <div>
                  <FormInput
                    type="password"
                    label="Current Password"
                    register={register}
                    error={errors.currentPassword}
                    registerValue={"currentPassword"}
                    registerReq
                    dashboard
                    labelColumn
                  />
                </div>
                <div>
                  <FormInput
                    type="password"
                    label="New Password"
                    register={register}
                    error={errors.newPassword}
                    registerValue={"newPassword"}
                    registerReq
                    dashboard
                    labelColumn
                  />
                </div>
                <div className="flex justify-end items-center gap-2 mt-4">
                  <Button
                    variant="success"
                    style="outlined"
                    onClick={handleCloseModal}
                  >
                    Close
                  </Button>
                  <Button
                    variant="success"
                    style="solid"
                    type="submit"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                  >
                    {isSubmitting ? "Changing Password." : "Change Password"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
