import { supabase } from "./supabase";
import { format } from "date-fns";

// 일반 거래 가져오기
export async function getRecords(accountId: string) {
  const { data, error } = await supabase
    .from("records")
    .select("id, account_id, description, date, amount, type, category_id")
    .eq("account_id", accountId);

  if (error) {
    console.error("거래 내역 에러 : ", error);
    return [];
  }

  return data.map((t) => ({
    ...t,
    date: format(new Date(t.date), "yyyy-MM-dd"),
  }));
}

// 정기 거래 가져오기
export async function getRegularTransactions(accountId: string) {
  const { data, error } = await supabase
    .from("regular_transactions")
    .select(
      "id, account_id, description, start_date, amount, type, category_id, frequency, day_of_month"
    )
    .eq("account_id", accountId);

  if (error) {
    console.error("정기 거래 에러 : ", error);
    return [];
  }

  return data;
}
