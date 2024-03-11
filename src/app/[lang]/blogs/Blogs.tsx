"use client";

import Loader from "@/components/DashboardComponent/Loader/Loader";
import Image from "next/image";
import React, { useState } from "react";
import { useQuery } from "react-query";

interface Blog {
  blogID: number;
  title: string;
  summary: string;
  content: string;
  selectedRadio1: number;
  topics: string[];
  bannerImage: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  lang: string;
}

const fetchBlogs = async (): Promise<{ data: Blog[] }> => {
  const response = await fetch("http://localhost:3000/api/blogs");
  if (!response.ok) {
    throw new Error("Error fetching blogs");
  }
  return response.json();
};

export default function Blogs() {
  const { data, isLoading, isError } = useQuery<{ data: Blog[] }>(
    "blogsData",
    fetchBlogs
  );
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleTopicToggle = (topic: string) => {
    setSelectedTopics((prevTopics) =>
      prevTopics.includes(topic)
        ? prevTopics.filter((t) => t !== topic)
        : [...prevTopics, topic]
    );
  };

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching blogs</div>;
  }

  const filteredBlogs = selectedTopics.length
    ? data?.data.filter((blog) =>
        blog.topics.some((topic) => selectedTopics.includes(topic))
      )
    : data?.data;

  return (
    <div className="flex flex-col gap-5 mt-4 mb-6">
      <h1 className="text-text-heading font-medium">Blogs</h1>

      <div className="flex flex-col gap-3">
        <div className="flex gap-4">
          <p className="text-text-subtitle font-medium">Topics : </p>
          {data?.data
            ?.reduce(
              (uniqueTopics: string[], blog) =>
                uniqueTopics.concat(
                  blog.topics.filter((topic) => !uniqueTopics.includes(topic))
                ),
              []
            )
            .map((topic) => (
              <label key={topic} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={selectedTopics.includes(topic)}
                  onChange={() => handleTopicToggle(topic)}
                />
                {topic}
              </label>
            ))}
        </div>
      </div>

      {filteredBlogs?.map((blog) => (
        <div
          key={blog.blogID}
          className="flex flex-col gap-4 bg-secondary p-4 rounded-large"
        >
          {blog.title && (
            <h2 className="text-text-title font-medium text-center">
              {blog.title}
            </h2>
          )}
          {blog.summary && (
            <p className="text-text-subtitle font-medium opacity-60">
              {blog.summary}
            </p>
          )}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="opacity-60"
          />
          <img src={blog.bannerImage} alt="Blog Banner" />
          <p>Topics: {blog.topics.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
