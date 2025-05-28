import type React from "react";
import type { MergedRecord } from "../hooks/MergedTransactions";

interface ListViewProps {
  mergedRecords: MergedRecord[];
}

const ListView: React.FC<ListViewProps> = ({ mergedRecords }) => {
  // 날짜 기준 정렬
  const sortedRecords = [...mergedRecords].sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md overflow-auto max-h-[600px]">
        <h2 className="text-xl font-semibold mb-4">거래 내역</h2>
        <ul>
          {sortedRecords.length === 0 && <li>거래 내역이 없습니다.</li>}
          {sortedRecords.map((record) => (
            <li key={record.id} className="mb-2 border-b pb-2">
              <div className="flex justify-between">
                <span>{record.date}</span>
                <span
                  className={
                    record.type === "수입" ? "text-green-600" : "text-red-600"
                  }
                >
                  {record.type === "수입" ? "+" : "-"}
                  {record.amount.toLocaleString()}원
                </span>
              </div>
              <div>{record.description || "-"}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListView;
