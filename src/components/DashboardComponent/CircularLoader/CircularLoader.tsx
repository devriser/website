import React from "react";

interface UploadModalProps {
  uploading: boolean;
  progress: number;
}

const UploadModal: React.FC<UploadModalProps> = ({ uploading, progress }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        uploading ? "bg-opacity-50 bg-black" : "hidden"
      }`}
    >
      <div className="bg-dashboard-table w-[30%] p-4 rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-16 h-16 text-solid-blue"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke="#007BFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${progress * 1.77}, 113`}
            ></circle>
          </svg>
        </div>
        <p className="text-center  text-secondary-reverse">
          Uploading... {progress}%
        </p>
      </div>
    </div>
  );
};

export default UploadModal;
