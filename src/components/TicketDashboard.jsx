import { useState } from "react";
import WidgetModal from "./WidgetModal";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../redux/slices/ticket";

const TicketDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const ticketWidget = useSelector((store) => store.ticketWidgets);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSaveModal = (data) => {
    console.log(data);
    const dispatchObj = { title: data, checked: false };
    dispatch(addWidget(dispatchObj));
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Ticket DashBoard</h2>
        <button
          className="bg-white p-2 rounded-md border-2 border-neutral-400"
          onClick={handleOpenModal}
        >
          Add Widget
        </button>
      </div>
      <div className="flex gap-4 items-center mt-2 overflow-auto px-4">
        {ticketWidget.length === 0 ? (
          <p>No widget added</p>
        ) : (
            ticketWidget.filter((widget) => !widget.checked).map((widget, index) => (
              <div
                key={index + 1}
                className="w-[28rem] min-w-[28rem] p-2 text-lg h-64 bg-white rounded-md shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {widget.title}
              </div>
            ))
        )}
      </div>
      {isOpen && (
        <WidgetModal onClose={handleCloseModal} onConfirm={handleSaveModal} />
      )}
    </div>
  );
};

export default TicketDashboard;
