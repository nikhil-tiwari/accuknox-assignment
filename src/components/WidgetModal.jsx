import { useState } from "react";

const WidgetModal = ({ onClose, onConfirm }) => {
  const [title, setTitle] = useState("");

  const handleConfirmWidget = () => {
    if (title === "") {
      alert("Please enter a title");
    } else {
      onConfirm(title);
      setTitle();
      onClose();
    }
  };

  const handleCloseWidget = () => {
    setTitle("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="h-56 w-[30rem] p-4 bg-white rounded-md flex flex-col justify-between">
        <h1 className="text-2xl font-semibold">Add widget</h1>
        <div className="flex flex-col">
          <label className="text-lg">Title</label>
          <input
            className="p-1 w-full bg-slate-200 active:border-0 rounded-r-md focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleConfirmWidget}
            className="bg-green-500 hover:bg-green-600 p-2 rounded-md"
          >
            Confirm
          </button>
          <button
            onClick={handleCloseWidget}
            className="bg-red-500 hover:bg-red-600 p-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidgetModal;
