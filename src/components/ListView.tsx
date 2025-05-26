import type React from "react";

const ListView: React.FC = () => {
  // const ListView: React.FC = ({ accounts, selectedAccountId }) => {
  //   const records = getRecords(selectedAccountId);
  return (
    // <div className="bg-white p-6 rounded-lg shadow-md">
    //   <h2 className="text-xl font-semibold mb-4 text-gray-800">거래 내역</h2>
    //   {records.length === 0 ? (
    //     <p className="text-gray-500">거래 내역이 없습니다.</p>
    //   ) : (
    //     <ul className="space-y-2">
    //       {records.map((record) => (
    //         <li key={record.id} className="flex justify-between p-2 border-b">
    //           <div>
    //             <p className="font-medium">
    //               {format(new Date(record.date), "yyyy-MM-dd")}
    //             </p>
    //             <p className="text-sm text-gray-600">{record.category}</p>
    //           </div>
    //           <p
    //             className={`${
    //               record.type === "수입" ? "text-green-500" : "text-red-500"
    //             }`}
    //           >
    //             {record.type === "수입" ? "+" : "-"}
    //             {record.amount.toLocaleString()}원
    //           </p>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>

    <>
      <div>
        <h2>거래 내역</h2>
      </div>
    </>
  );
};

export default ListView;
