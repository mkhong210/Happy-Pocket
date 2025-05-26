import type React from "react";
import Calendar from "react-calendar";

const CalendarView: React.FC = () =>
  // accounts,
  // selectedAccountId,
  // selectedDate,
  // setSelectedDate
  {
    // const [date, setDate] = useState(new Date());

    // const records = getRecords(selectedAccountId);
    // const regularTransactions = getRegularTransactions(selectedAccountId);

    // const tileContent = ({ date, view }) => {
    //   if (view === "month") {
    //     const dateString = date.toISOString().split("T")[0];
    //     const dayOfMonth = date.getDate();

    //     // 일반 거래 (records)
    //     const dailyRecords = records.filter((r) => r.date === dateString);

    //     // 반복 거래 (regular)
    //     const dailyRegulars = regularTransactions.filter(
    //       (reg) => reg.dayOfMonth === dayOfMonth
    //     );

    //     // 총액 계산
    //     const recordTotal = dailyRecords.reduce(
    //       (sum, r) => sum + (r.type === "수입" ? r.amount : -r.amount),
    //       0
    //     );
    //     const regularTotal = dailyRegulars.reduce(
    //       (sum, reg) => sum + (reg.type === "수입" ? reg.amount : -reg.amount),
    //       0
    //     );
    //     const total = recordTotal + regularTotal;

    //     if (dailyRecords.length > 0 || dailyRegulars.length > 0) {
    //       return (
    //         <p
    //           className={`text-xs ${
    //             total >= 0 ? "text-green-500" : "text-red-500"
    //           }`}
    //         >
    //           {total.toLocaleString()}원
    //         </p>
    //       );
    //     }
    //   }
    //   return null;
    // };

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* <h2 className="text-xl font-semibold mb-4 text-gray-800">캘린더</h2> */}
        <Calendar
          locale="ko-KR"
          // onChange={setDate}
          // value={date}
          // tileContent={tileContent}
          formatDay={(_, date) => date.getDate().toString()}
          className="w-full"
        />
      </div>
    );
  };

export default CalendarView;
