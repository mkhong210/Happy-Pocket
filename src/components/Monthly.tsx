import type React from "react";

const Monthly: React.FC = () => {
  // const Monthly: React.FC = ({ selectedAccountId, selectedDate }) => {
  // 	// 선택된 날짜에서 월 추출 (예: 2025-04)
  //   const selectedMonth = format(selectedDate, "yyyy-MM");

  //   // 데이터 가져오기
  //   const records = getRecords(selectedAccountId);
  //   const regularTransactions = getRegularTransactions(selectedAccountId);

  //   // 선택된 월 데이터 필터링
  //   const filteredRecords = records.filter((record) =>
  //     record.date.startsWith(selectedMonth)
  //   );

  //   // 반복 거래는 dayOfMonth 기준으로 현재 월에 해당하는지 확인
  //   const filteredRegulars = regularTransactions.filter((reg) => {
  //     const startDate = parse(reg.startDate, "yyyy-MM-dd", new Date());
  //     return format(startDate, "yyyy-MM") <= selectedMonth;
  //   });

  //   // 수입/지출 계산
  //   const recordIncome = filteredRecords
  //     .filter((r) => r.type === "수입")
  //     .reduce((sum, r) => sum + r.amount, 0);
  //   const recordExpense = filteredRecords
  //     .filter((r) => r.type === "지출")
  //     .reduce((sum, r) => sum + r.amount, 0);

  //   const regularIncome = filteredRegulars
  //     .filter((r) => r.type === "수입")
  //     .reduce((sum, r) => sum + r.amount, 0);
  //   const regularExpense = filteredRegulars
  //     .filter((r) => r.type === "지출")
  //     .reduce((sum, r) => sum + r.amount, 0);

  //   const totalIncome = recordIncome + regularIncome;
  //   const totalExpense = recordExpense + regularExpense;
  //   const net = totalIncome - totalExpense;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      {/* <h2 className="text-xl font-semibold mb-4 text-gray-800">
        4월 지출/수입 내역
      </h2> */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-gray-600">총 수입</p>
          <p className="text-green-500 font-medium">
            {/* {totalIncome.toLocaleString()}원 */}
          </p>
        </div>
        <div>
          <p className="text-gray-600">총 지출</p>
          <p className="text-red-500 font-medium">
            {/* {totalExpense.toLocaleString()}원 */}
          </p>
        </div>
        <div>
          <p className="text-gray-600">순수익</p>
          <p
          // className={`${
          //   net >= 0 ? "text-green-500" : "text-red-500"
          // } font-medium`}
          >
            {/* {net.toLocaleString()}원 */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Monthly;
