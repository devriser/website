"use client";
import EditBlogEditor from "@/components/DashboardComponent/EditBlogEditor/EditBlogEditor";
import React, { useEffect, useState } from "react";

export default function EditBlog() {
  const [blogID, setBlogID] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const blogID = urlParams.get("blogID");
    setBlogID(blogID || "");
    console.log("Blog ID from window.location:", blogID);
  }, []);

  return <EditBlogEditor blogID={blogID} />;
}
