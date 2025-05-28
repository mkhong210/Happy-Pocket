import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AddButtonProps {
  accountId: string;
}

const AddButton: React.FC<AddButtonProps> = ({ accountId }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleAdd = (type: "record" | "regular") => {
    navigate(`/add?type=${type}`, {
      state: { accountId },
    });
  };

  return (
    <div
      className={`fixed bottom-24 right-6 z-50 flex flex-col ${
        show ? "items-end" : "items-center"
      }`}
    >
      {show && (
        // <div className="mt-2 bg-white shadow-lg rounded-md p-2">
        <div className="flex flex-col mb-2 space-y-2">
          <button
            onClick={() => handleAdd("record")}
            // className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            className="bg-white shadow-lg rounded-md px-4 py-2 w-40 text-left hover:bg-gray-100"
          >
            일반 지출 추가
          </button>
          <button
            onClick={() => handleAdd("regular")}
            // className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            className="bg-white shadow-lg rounded-md px-4 py-2 w-40 text-left hover:bg-gray-100"
          >
            고정 지출 추가
          </button>
        </div>
      )}

      <button
        onClick={() => setShow((prev) => !prev)}
        className="bg-blue-600 text-white rounded-full w-14 h-14 text-2xl shadow-md flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddButton;
