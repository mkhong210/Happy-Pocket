// 계좌 상태 로직
// 데이터 처리(pocketData.json 읽기, 거래 계산)
import { loadFromLocalStorage } from "./storage";
import { Account, RecordItem, RegularTransaction } from "../types/index";

// 계좌 데이터 가져오기
export const getAccounts = (): Account[] => {
  const data = loadFromLocalStorage();
  return data.accounts;
};

// 특정 계좌의 거래 내역 가져오기
export const getRecords = (accountId: string): RecordItem[] => {
  const data = loadFromLocalStorage();
  const account = data.accounts.find((acc) => acc.id === accountId);
  return account ? account.records : [];
};

// 특정 계좌의 반복 거래 가져오기
export const getRegularTransactions = (
  accountId: string
): RegularTransaction[] => {
  const data = loadFromLocalStorage();
  const account = data.accounts.find((acc) => acc.id === accountId);
  return account ? account.regular : [];
};
