export interface RecordItem {
  id: string;
  date: string;
  amount: number;
  category: string;
  memo?: string;
}

export interface RegularTransaction {
  id: string;
  title: string;
  interval: string; // 예: 'weekly', 'monthly'
  amount: number;
}

export interface Account {
  id: string;
  name: string;
  balance: number;
  records: RecordItem[];
  regular: RegularTransaction[];
}

export interface PocketData {
  accounts: Account[];
}
