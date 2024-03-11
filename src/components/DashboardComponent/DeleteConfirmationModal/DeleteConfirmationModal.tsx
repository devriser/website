import React from "react";
import Button from "@/components/shared/Button";
import DeleteIcon from "./DeleteIcon";

const DeleteConfirmationModal = ({ onConfirm, onCancel }: any) => {
  return (
    <div className="bg-dashboard-table flex flex-col items-center border-table-border border p-4 rounded-lg shadow-md gap-4 w-[30%]">
      <div className="bg-[#FF494933] rounded-full p-2 flex items-center justify-center">
        <DeleteIcon />
      </div>
      <p className="text-text-title text-secondary-reverse font-medium">
        Are you sure?
      </p>
      <p className="text-light-secondary w-[80%] text-center">
        This action cannot be un done. All values associated with this field
        will be lost.
      </p>
      <div className="flex flex-col gap-3 w-full">
        <Button variant="danger" onClick={onConfirm} buttonSize="full">
          Delete
        </Button>
        <Button
          variant="success"
          style="outlined"
          onClick={onCancel}
          buttonSize="full"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
