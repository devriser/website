"use client";
import {
  TableDeleteIcon,
  TableEditIcon,
  TableViewIcon,
} from "@/assets/svg/DahboardTableEditIcons";
import ThreeDotsSvg from "@/assets/svg/ThreeDotsSvg";
import DeleteConfirmationModal from "@/components/DashboardComponent/DeleteConfirmationModal/DeleteConfirmationModal";
import Loader from "@/components/DashboardComponent/Loader/Loader";
import Button from "@/components/shared/Button";
import FormInput from "@/components/shared/FormComponents/formInput/FormInput";
import Image from "next/image";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

export default function UserManagement() {
  const queryClient = useQueryClient();
  const [action, setAction] = useState<number | null>(null);
  const [showUserDeleteModal, setShowUserDeleteModal] = useState(false);
  const [selectedBlogID, setSelectedBlogID] = useState(null);
  const fetchUser = async () => {
    const response = await fetch("http://localhost:3000/api/user-management");
    const data = await response.json();
    return data.data;
  };
  const deleteUser = async (userId: number) => {
    const response = await fetch(
      `http://localhost:3000/api/user-management?userId=${userId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`Error deleting blog post: ${response.statusText}`);
    }
  };

  const { data: users, isLoading, isError } = useQuery("users", fetchUser);

  if (isLoading) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  const formatUpdatedAt = (timestamp: any) => {
    const milliseconds = timestamp * 1000;

    const dateObject = new Date(milliseconds);

    const formattedDate = dateObject.toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return formattedDate;
  };

  const handleAction = (index: number) => {
    setAction((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleDelete = (userId: any) => {
    if (userId) {
      setSelectedBlogID(userId);
      setShowUserDeleteModal(true);
    } else {
      console.error("Invalid userId:", userId);
    }
  };

  const handleConfirmDelete = async () => {
    if (selectedBlogID) {
      try {
        await deleteUser(selectedBlogID);
        queryClient.invalidateQueries("users");
        setSelectedBlogID(null);
        setShowUserDeleteModal(false);
      } catch (error) {
        console.error("Error deleting blog post:");
      }
    }
  };

  const handleCancelDelete = () => {
    setSelectedBlogID(null);
    setShowUserDeleteModal(false);
  };

  return (
    <div className="flex flex-col justify-between p-4 gap-4 h-full">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <FormInput type="search" dashboard placeHolder="Search users" />
        </div>
        <div className="flex-[3] flex items-end justify-end">
          <Button
            variant="success"
            style="solid"
            as="NextLink"
            href={"/web-dashboard/home/user-management/create-user"}
          >
            Create User
          </Button>
        </div>
      </div>
      <div className="h-full overflow-auto">
        <div className=" p-3 font-bold border-b-transparent bg-dashboard-table rounded-t-banner-rounded shadow-lg border-b">
          <div className="flex ">
            <div className="flex-[3]">Member</div>
            <div className="flex-[3]">Role</div>
            <div className="flex-[3]">Designation</div>
            <div className="flex-[3]">Date</div>
            {/* <div className="flex-[1]">Status</div> */}
            <div className="flex-1"></div>
          </div>
        </div>
        <div className="flex flex-col  bg-dashboard-bg rounded-b-banner-rounded  ">
          {users.map((user: any, index: number) => (
            <div
              key={user.userId}
              className={
                index === users.length - 1 ? "" : "border-b border-table-border"
              }
            >
              <div className={`flex  p-3 `}>
                <div className="flex-[3] flex gap-1 items-center text-secondary-reverse">
                  <div>
                    <Image
                      alt="user.firstName"
                      src={user.profileImage}
                      height={50}
                      width={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <div className="flex gap-1">
                      <p className="text-secondary-reverse">{user.firstName}</p>
                      <p className="text-secondary-reverse">{user.lastName}</p>
                    </div>
                    <div className="text-light-secondary text-xs">
                      {user.email}
                    </div>
                  </div>
                </div>
                <div className="flex-[3] text-secondary-reverse flex items-center">
                  {user.role}
                </div>
                <div className="flex-[3] text-secondary-reverse flex items-center">
                  {user.designation}
                </div>
                <div className="flex-[3] text-secondary-reverse flex items-center">
                  {formatUpdatedAt(user.updatedAt)}
                </div>

                <div className="flex-1 flex justify-end relative  items-center">
                  <div
                    className="bg-dashboard-table w-fit h-fit rounded-large cursor-pointer "
                    onClick={() => handleAction(index)}
                  >
                    <ThreeDotsSvg />
                  </div>
                  {action === index && (
                    <div className="bg-dashboard-table w-fit h-fit rounded-large  absolute -left-10 p-2 z-50 flex flex-col gap-3 border border-table-border ">
                      <div className="flex items-center gap-1 cursor-pointer">
                        <div className="bg-[#0075FF1A] p-1 rounded-large ">
                          <TableEditIcon />
                        </div>
                        <span>Edit</span>
                      </div>
                      <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => {
                          handleDelete(user.userId);
                          setAction(null);
                        }}
                      >
                        <div className="bg-[#0075FF1A] p-1 rounded-large ">
                          <TableDeleteIcon />
                        </div>
                        <span>Delete</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Render your image here if needed */}
              {/* <Image
              src={user.bannerImage}
              alt={user.title}
              width={100}
              height={100}
            /> */}
            </div>
          ))}
        </div>
        {showUserDeleteModal && (
          <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <DeleteConfirmationModal
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
            />
          </div>
        )}
      </div>
    </div>
  );
}
