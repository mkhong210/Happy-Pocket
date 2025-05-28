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

// // 계좌 데이터 가져오기
// export const getAccounts = (): Account[] => {
//   const data = loadFromLocalStorage();
//   return data.accounts;
// };

// // 특정 계좌의 거래 내역 가져오기
// export const getRecords = (accountId: string): RecordItem[] => {
//   const data = loadFromLocalStorage();
//   const account = data.accounts.find((acc) => acc.id === accountId);
//   return account ? account.records : [];
// };

// // 특정 계좌의 반복 거래 가져오기
// export const getRegularTransactions = (
//   accountId: string
// ): RegularTransaction[] => {
//   const data = loadFromLocalStorage();
//   const account = data.accounts.find((acc) => acc.id === accountId);
//   return account ? account.regular : [];
// };
