import { supabase } from "./supabase";

// 계좌 목록 불러오기기
export async function getAccounts(userId: string) {
  const { data, error } = await supabase
    .from("accounts")
    .select("id, name")
    .eq("user_id", userId);

  if (error) {
    console.error("계좌 가져오기 에러:", error);

    return [];
  }

  return data;
}
