"use client";
import {
  TableDeleteIcon,
  TableEditIcon,
  TableViewIcon,
} from "@/assets/svg/DahboardTableEditIcons";
import ThreeDotsSvg from "@/assets/svg/ThreeDotsSvg";
import BlogViewModal from "@/components/DashboardComponent/BlogViewModal/BlogViewModal";
import DeleteConfirmationModal from "@/components/DashboardComponent/DeleteConfirmationModal/DeleteConfirmationModal";
import Loader from "@/components/DashboardComponent/Loader/Loader";
import Button from "@/components/shared/Button";
import FormInput from "@/components/shared/FormComponents/formInput/FormInput";
import Link from "next/link";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchBlogs = async () => {
  const response = await fetch("http://localhost:3000/api/portfolio");
  const data = await response.json();
  return data.data;
};

const deleteBlog = async (portfolioID: number) => {
  const response = await fetch(
    `http://localhost:3000/api/portfolio?portfolioID=${portfolioID}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(`Error deleting case study: ${response.statusText}`);
  }
};

const Portfolio = () => {
  const queryClient = useQueryClient();
  const [action, setAction] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBlogID, setSelectedBlogID] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const { data: blogs, isLoading, isError } = useQuery("portfolio", fetchBlogs);

  const mutation = useMutation(deleteBlog, {
    onSuccess: () => {
      queryClient.invalidateQueries("portfolio");
    },
  });

  if (isLoading) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
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

  const handleDelete = (portfolioID: any) => {
    if (portfolioID) {
      setSelectedBlogID(portfolioID);
      setShowDeleteModal(true);
    } else {
      console.error("Invalid portfolioID:", portfolioID);
    }
  };

  const handleConfirmDelete = async () => {
    if (selectedBlogID) {
      try {
        await deleteBlog(selectedBlogID);
        queryClient.invalidateQueries("portfolio");
        setSelectedBlogID(null);
        setShowDeleteModal(false);
      } catch (error) {
        console.error("Error deleting blog post:");
      }
    }
  };

  const handleCancelDelete = () => {
    setSelectedBlogID(null);
    setShowDeleteModal(false);
  };

  const handleView = (portfolioID: any) => {
    const blog = blogs.find((b: any) => b.portfolioID === portfolioID);

    if (blog) {
      setSelectedBlog(blog);
    } else {
      console.error("Invalid portfolioID:", portfolioID);
    }
  };

  return (
    <div className="flex flex-col justify-between p-4 gap-4 h-full">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <FormInput type="search" dashboard placeHolder="Search portfolio" />
        </div>
        <div className="flex justify-end flex-[3]">
          <Button
            variant="success"
            style="solid"
            as="NextLink"
            href={"/web-dashboard/home/portfolio/create-portfolio"}
          >
            Create Portfolio
          </Button>
        </div>
      </div>
      <div className="h-full overflow-auto">
        <div className=" p-3 font-bold border-b-transparent bg-dashboard-table rounded-t-banner-rounded shadow-lg border-b">
          <div className="flex ">
            <div className="flex-[3]">Title</div>
            <div className="flex-[3]">Category</div>
            <div className="flex-[3]">Author</div>
            <div className="flex-[3]">Last Updated</div>
            <div className="flex-[1]">Status</div>
            <div className="flex-1"></div>
          </div>
        </div>
        <div className="flex flex-col  bg-dashboard-bg rounded-b-banner-rounded ">
          {blogs.map((blog: any, index: number) => (
            <div
              key={blog.portfolioID}
              className={
                index === blogs.length - 1 ? "" : "border-b border-table-border"
              }
            >
              <div className={`flex  p-3 `}>
                <div className="flex-[3] text-secondary-reverse flex items-center">
                  {blog.title}
                </div>
                <div className="flex-[3] text-secondary-reverse flex items-center">
                  <ul>
                    {blog.topics.map((topic: string) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex-[3] text-secondary-reverse flex items-center">
                  Aryan Choudhary
                </div>
                <div className="flex-[3] text-secondary-reverse flex items-center">
                  {formatUpdatedAt(blog.updatedAt)}
                </div>
                <div className="flex-[1] text-secondary-reverse flex items-center">
                  {blog.status === "published" ? (
                    <span className="text-green-500 border border-green-500 p-1 rounded-large">
                      Published
                    </span>
                  ) : (
                    <span className="text-yellow-500 border border-yellow-500 p-1 rounded-large">
                      Draft
                    </span>
                  )}
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
                      <Link
                        href={`/web-dashboard/home/portfolio/edit-portfolio?portfolioID=${blog.portfolioID}`}
                        className="flex items-center gap-1 cursor-pointer"
                      >
                        <div className="bg-[#0075FF1A] p-1 rounded-large ">
                          <TableEditIcon />
                        </div>
                        <span>Edit</span>
                      </Link>
                      <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => {
                          handleView(blog.portfolioID), setAction(null);
                        }}
                      >
                        <div className="bg-[#0075FF1A] p-1 rounded-large">
                          <TableViewIcon />
                        </div>
                        <span>View</span>
                      </div>
                      <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => {
                          handleDelete(blog.portfolioID);
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
              src={blog.bannerImage}
              alt={blog.title}
              width={100}
              height={100}
            /> */}
            </div>
          ))}
        </div>
        {showDeleteModal && (
          <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <DeleteConfirmationModal
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
            />
          </div>
        )}

        {selectedBlog && (
          <BlogViewModal
            portfolio
            blog={selectedBlog}
            onClose={() => setSelectedBlog(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
