import type React from "react";
import Calendar from "react-calendar";

const CalendarView: React.FC = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Calendar locale="ko-KR"></Calendar>
      </div>
    </>
  );
};

export default CalendarView;
