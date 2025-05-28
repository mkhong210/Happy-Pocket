import { useState, useEffect } from "react";
import { getRecords, getRegularTransactions } from "../utils/transactions";
// import type { Database } from "../../types_db";

// type RecordRow = Database["public"]["Tables"]["records"]["Row"];
// type RegularTransactionRow =
//   Database["public"]["Tables"]["regular_transactions"]["Row"];

export interface MergedRecord {
  id: string;
  date: string;
  amount: number;
  type: "수입" | "지출";
  description: string | null;
  category_id: string;
  source: "record" | "regular";
  day_of_month?: number | null;
}

export function MergedTransactions(accountId: string, selectedMonth: Date) {
  const [mergedRecords, setMergedRecords] = useState<MergedRecord[]>([]);

  useEffect(() => {
    if (!accountId || !selectedMonth) return;

    async function fetchData() {
      const [records, regulars] = await Promise.all([
        getRecords(accountId),
        getRegularTransactions(accountId),
      ]);

      // 일반 거래 - 해당 월만 필터
      const recordsFormatted: MergedRecord[] = records
        .filter((rec) => {
          const date = new Date(rec.date);
          return (
            date.getFullYear() === selectedMonth.getFullYear() &&
            date.getMonth() === selectedMonth.getMonth()
          );
        })
        .map((rec) => ({
          id: rec.id,
          date: rec.date,
          amount: rec.amount,
          type: rec.type,
          description: rec.description,
          category_id: rec.category_id,
          source: "record",
        }));

      // 정기 거래 - selectedMonth 기준으로 date 만들어줌
      const regularsFormatted: MergedRecord[] = regulars
        .map((reg) => {
          const year = selectedMonth.getFullYear();
          const month = selectedMonth.getMonth();
          const day = reg.day_of_month ?? 1;
          const dateObj = new Date(year, month, day);

          // 유효하지 않은 날짜 (예: 2월 30일) 걸러내기
          if (dateObj.getMonth() !== month) return null;

          return {
            id: reg.id,
            date: dateObj.toISOString().split("T")[0],
            amount: reg.amount,
            type: reg.type,
            description: reg.description,
            category_id: reg.category_id,
            source: "regular",
          };
        })
        .filter((r): r is MergedRecord => r !== null);

      // 일반 + 정기 거래 합치기
      setMergedRecords([...recordsFormatted, ...regularsFormatted]);
    }

    fetchData();
  }, [accountId, selectedMonth]);

  return mergedRecords;
}
