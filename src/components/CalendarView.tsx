import type React from "react";
import Calendar from "react-calendar";
// import { MergedTransactions } from "../hooks/MergedTransactions";
import type { MergedRecord } from "../hooks/MergedTransactions";

interface CalendarViewProps {
  mergedRecords: MergedRecord[];
  selectedMonth: Date;
  setSelectedMonth: (date: Date) => void;
}

const CalendarView: React.FC<CalendarViewProps> = ({
  mergedRecords,
  selectedMonth,
  setSelectedMonth,
}) => {
  // const mergedRecords = MergedTransactions(selectedAccountId);

  // 월 변경 시 부모에 전달
  const onActiveStartDateChange = ({
    activeStartDate,
  }: {
    activeStartDate: Date;
  }) => {
    setSelectedMonth(activeStartDate);
  };

  // 각 날짜 타일에 금액 표시
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const dateString = date.toISOString().split("T")[0];

      const dailyRecords = mergedRecords.filter(
        (rec) => rec.date === dateString
      );

      if (dailyRecords.length === 0) return null;

      const total = dailyRecords.reduce(
        (sum, rec) => sum + (rec.type === "수입" ? rec.amount : -rec.amount),
        0
      );

      return (
        <p
          className={`text-xs ${
            total >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {total.toLocaleString()}원
        </p>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Calendar
        locale="ko-KR"
        value={selectedMonth}
        onChange={(date) => setSelectedMonth(date as Date)}
        onActiveStartDateChange={onActiveStartDateChange}
        tileContent={tileContent}
        // calendarType="US"
        formatDay={(_, date) => date.getDate().toString()}
        className="w-full"
      />
    </div>
  );
};

export default CalendarView;
