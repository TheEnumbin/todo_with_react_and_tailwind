import { ReactNode } from "react";

interface ModalProps {
  isClosed: boolean;
}

const EditModal = ({ isClosed }: ModalProps) => {
  if (isClosed) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Enter your task</h2>
        <input
          type="text"
          // value={inputValue}
          // onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            // onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            // onClick={() => onSave(inputValue)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
