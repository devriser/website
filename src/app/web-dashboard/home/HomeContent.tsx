"use client";

import useAuth from "@/utils/functions/useAuth";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import darklogo from "@/assets/images/devriserDarkLogo.png";
import lightlogo from "@/assets/images/devriserLightLogo.png";
import {
  BlogIcon,
  CaseStudyIcon,
  PortfolioIcon,
} from "@/assets/svg/DashboardNavbarIcons";
import Loader from "@/components/DashboardComponent/Loader/Loader";
import Link from "next/link";
import EditPen from "@/assets/svg/EditPen";
import FormInput from "@/components/shared/FormComponents/formInput/FormInput";
import Button from "@/components/shared/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormInput = {
  updatedTitle: string;
  updatedDescription: string;
};

const fetchBlogCount = async () => {
  const response = await fetch("http://localhost:3000/api/blogs");
  const data = await response.json();
  return data.data.length;
};
const fetchCaseStudyCount = async () => {
  const response = await fetch("http://localhost:3000/api/case-study");
  const data = await response.json();
  return data.data.length;
};
const fetchPortfolioCount = async () => {
  const response = await fetch("http://localhost:3000/api/portfolio");
  const data = await response.json();
  return data.data.length;
};

const fetchUserDetails = async () => {
  const response = await fetch("http://localhost:3000/api/user-management");
  const data = await response.json();
  return data.data[0];
};

interface UserDetails {
  userId: number;
  firstName: string;
  lastName: string;
  role: string;
  profileImage: string;
}

export default function HomeContent() {
  const [blogCount, setBlogCount] = useState(0);
  const [caseStudyCount, setCaseStudyCount] = useState(0);
  const [portfolioCount, setPortfolioCount] = useState(0);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loadingUserDetails, setLoadingUserDetails] = useState(true);
  const [mainHeadings, setMainHeadings] = useState({
    title: "",
    description: "",
  });

  const [adminInfo, setAdminInfo] = useState({
    role: "",
    userId: -1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>();

  useEffect(() => {
    const getBlogCount = async () => {
      const count = await fetchBlogCount();
      setBlogCount(count);
    };

    const getCaseStudyCount = async () => {
      const count = await fetchCaseStudyCount();
      setCaseStudyCount(count);
    };

    const getPortfolioCount = async () => {
      const count = await fetchPortfolioCount();
      setPortfolioCount(count);
    };

    const getUserDetails = async () => {
      try {
        const user = await fetchUserDetails();
        setUserDetails(user);
      } finally {
        setLoadingUserDetails(false);
      }
    };

    getBlogCount();
    getCaseStudyCount();
    getPortfolioCount();
    getUserDetails();
  }, []);

  useAuth();

  useEffect(() => {
    const fetchMainHeadings = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/main-headings");
        const data = await response.json();
        setMainHeadings(data);
      } catch (error) {
        console.error("Error fetching main headings:", error);
      }
    };

    fetchMainHeadings();
  }, []);

  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/login");
        const data = await response.json();
        setAdminInfo(data);
      } catch (error) {
        console.error("Error fetching admin information:", error);
      }
    };
    fetchAdminInfo();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/main-headings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.updatedTitle,
          description: data.updatedDescription,
        }),
      });

      if (response.ok) {
        toast.success("Main headings updated successfully");
        console.log("Main headings updated successfully");
      } else {
        toast.error("Failed to update main headings");
        console.error("Failed to update main headings");
      }
    } catch (error) {
      console.error("Error updating main headings:", error);
    }

    setIsModalOpen(false);
  };
  return (
    <div className="p-6 flex w-full gap-12 ">
      <div className="flex flex-col gap-6 flex-[2] relative">
        <div className=" flex  bg-dashboard-hero-gradient  rounded-banner-rounded  p-4">
          <div>
            <h1 className="text-[26px] font-medium text-black  ">
              {mainHeadings.title}
            </h1>
            <h2 className="text-text-subtitle text-black font-medium opacity-80">
              {mainHeadings.description}
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={lightlogo}
              alt="DevRiser Logo"
              width={200}
              height={200}
              className="opacity-30"
            />
          </div>
          {adminInfo.role === "admin" && (
            <div
              onClick={handleOpenModal}
              className="cursor-pointer absolute top-0 right-0 bg-dashboard-hero-gradient p-1 rounded-bl-banner-rounded"
            >
              <EditPen />
            </div>
          )}

          {isModalOpen && (
            <div className="fixed inset-0 z-50 overflow-auto backdrop-blur-sm flex items-center justify-center">
              <div className="absolute inset-0 bg-black   opacity-50"></div>
              <div className="relative bg-dashboard-table p-8 rounded-lg w-[40%] flex flex-col gap-3">
                <h2 className="text-2xl font-bold mb-4">Update Heading</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-3">
                    <FormInput
                      register={register}
                      registerReq
                      error={errors.updatedTitle}
                      registerValue="updatedTitle"
                      label="Title"
                      labelColumn
                      dashboard
                    />
                    <FormInput
                      label="Description"
                      labelColumn
                      dashboard
                      register={register}
                      registerValue={"updatedDescription"}
                      error={errors.updatedDescription}
                      registerReq
                    />
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button
                      variant="success"
                      style="solid"
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="danger"
                      style="outlined"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-6 w-full">
          <div className="font-medium flex p-4 gap-3 bg-dashboard-table rounded-banner-rounded  justify-center items-center">
            <div className="bg-[#0075FF1F] p-2 rounded-full w-fit h-fit">
              <BlogIcon />
            </div>
            <div className="flex flex-col">
              <p className="text-text-subtitle font-medium">
                {blogCount > 1 ? "Blogs" : "Blog"}
              </p>
              <p>
                {blogCount} {blogCount > 100 ? "+" : ""}
              </p>
            </div>
          </div>
          <div className="font-medium flex p-4 gap-3 bg-dashboard-table rounded-banner-rounded  justify-center items-center">
            <div className="bg-[#0075FF1F] p-2 rounded-full w-fit h-fit">
              <CaseStudyIcon />
            </div>
            <div className="flex flex-col">
              <p className="text-text-subtitle font-medium">
                {caseStudyCount > 1 ? "Case Studies" : "Case Study"}
              </p>
              <p>
                {caseStudyCount} {caseStudyCount > 100 ? "+" : ""}
              </p>
            </div>
          </div>
          <div className="font-medium flex p-4 gap-3 bg-dashboard-table rounded-banner-rounded  justify-center items-center">
            <div className="bg-[#0075FF1F] p-2 rounded-full w-fit h-fit">
              <PortfolioIcon />
            </div>
            <div className="flex flex-col">
              <p className="text-text-subtitle font-medium">
                {portfolioCount > 1 ? "Portfolios" : "Portfolio"}
              </p>
              <p>
                {portfolioCount} {portfolioCount > 100 ? "+" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 flex-1 whitespace-nowrap w-full bg-dashboard-table rounded-banner-rounded p-4 h-full overflow-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-text-title font-medium ">User Management</h2>
          <Link
            href={"/web-dashboard/home/user-management"}
            className="opacity-50"
          >
            View All
          </Link>
        </div>
        {loadingUserDetails ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="flex">
              <Image
                src={userDetails?.profileImage ?? ""}
                alt="User Banner"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p>
                {userDetails?.firstName} {userDetails?.lastName}
              </p>

              <p className="opacity-60">{userDetails?.role}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
