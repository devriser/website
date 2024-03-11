import { PlusIcon } from "@/assets/svg/AllIconComponent";
import Image from "next/image";
import React from "react";

type Props = {
  blog: any;
  onClose: () => void;
  caseStudy?: boolean;
  portfolio?: boolean;
};

export default function BlogViewModal({
  blog,
  onClose,
  caseStudy,
  portfolio,
}: Props) {
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-dashboard-table rounded-banner-rounded h-[90%] w-[60%] p-6 pt-4 flex flex-col gap-2">
        <div className="flex justify-between ">
          <p>{caseStudy ? "Case Study" : portfolio ? "Portfolio" : "Blog"}</p>
          <button onClick={onClose} className="rotate-45">
            <PlusIcon />
          </button>
        </div>
        <div className="bg-primary h-full w-full flex flex-col rounded-large p-12   overflow-auto gap-3">
          <h2 className="text-center text-solid-blue font-medium text-text-subtitle">
            {blog.topics}
          </h2>
          <h1 className="text-text-title font-medium text-center">
            {blog.title}
          </h1>
          <div className="flex justify-center items-center">
            <Image
              src={blog.bannerImage}
              alt={blog.title}
              height={600}
              width={800}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </div>
  );
}
