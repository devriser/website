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
import Tooltip from "@/components/DashboardComponent/Tooltip/Tooltip";
import Button from "@/components/shared/Button";
import FormInput from "@/components/shared/FormComponents/formInput/FormInput";
import Link from "next/link";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchBlogs = async () => {
  const response = await fetch("http://localhost:3000/api/blogs");
  const data = await response.json();
  return data.data;
};

const deleteBlog = async (blogID: number) => {
  const response = await fetch(
    `http://localhost:3000/api/blogs?blogID=${blogID}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(`Error deleting blog post: ${response.statusText}`);
  }
};

const BlogTable = () => {
  const queryClient = useQueryClient();
  const [action, setAction] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBlogID, setSelectedBlogID] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const { data: blogs, isLoading, isError } = useQuery("blogs", fetchBlogs);

  const mutation = useMutation(deleteBlog, {
    onSuccess: () => {
      queryClient.invalidateQueries("blogs");
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

  const handleDelete = (blogID: any) => {
    if (blogID) {
      setSelectedBlogID(blogID);
      setShowDeleteModal(true);
    } else {
      console.error("Invalid blogID:", blogID);
    }
  };

  const handleConfirmDelete = async () => {
    if (selectedBlogID) {
      try {
        await deleteBlog(selectedBlogID);
        queryClient.invalidateQueries("blogs");
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

  const handleView = (blogID: any) => {
    const blog = blogs.find((b: any) => b.blogID === blogID);

    if (blog) {
      setSelectedBlog(blog);
    } else {
      console.error("Invalid blogID:", blogID);
    }
  };

  return (
    <div className="flex flex-col justify-between p-4 gap-4 h-full">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <FormInput type="search" dashboard placeHolder="Search blogs" />
        </div>
        <div className="flex justify-end flex-[3]">
          <Button
            variant="success"
            style="solid"
            as="NextLink"
            href={"/web-dashboard/home/blog-section/blog-editor"}
          >
            Create Blog
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
        <div className="flex flex-col  bg-dashboard-bg rounded-b-banner-rounded  ">
          {blogs.map((blog: any, index: number) => (
            <div
              key={blog.blogID}
              className={
                index === blogs.length - 1 ? "" : "border-b border-table-border"
              }
            >
              <div className={`flex  p-3 `}>
                <div className="flex-[3] text-secondary-reverse flex items-center">
                  <Tooltip text={blog.title}>
                    <span>
                      {blog.title.slice(0, 20)}
                      {blog.title.length > 20 && "..."}
                    </span>
                  </Tooltip>
                </div>
                <div className="flex-[3] text-secondary-reverse flex items-center">
                  <ul>
                    <Tooltip text={blog.topics.join(", ")}>
                      <span>
                        {blog.topics[0].slice(0, 25)}
                        {blog.topics[0].length > 25 && "..."}
                      </span>
                    </Tooltip>
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
                        href={`/web-dashboard/home/blog-section/edit-blog?blogID=${blog.blogID}`}
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
                          handleView(blog.blogID), setAction(null);
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
                          handleDelete(blog.blogID);
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
            blog={selectedBlog}
            onClose={() => setSelectedBlog(null)}
          />
        )}
      </div>
    </div>
  );
};

export default BlogTable;
