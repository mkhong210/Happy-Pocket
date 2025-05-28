export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
        };
      };

      accounts: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          created_at?: string;
        };
      };

      categories: {
        Row: {
          id: string;
          name: string;
          type: "수입" | "지출";
        };
        Insert: {
          id?: string;
          name: string;
          type: "수입" | "지출";
        };
        Update: {
          id?: string;
          name?: string;
          type?: "수입" | "지출";
        };
      };

      records: {
        Row: {
          id: string;
          account_id: string;
          description: string | null;
          date: string;
          amount: number;
          type: "수입" | "지출";
          category_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          account_id: string;
          description?: string | null;
          date: string;
          amount: number;
          type: "수입" | "지출";
          category_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          account_id?: string;
          description?: string | null;
          date?: string;
          amount?: number;
          type?: "수입" | "지출";
          category_id?: string;
          created_at?: string;
        };
      };

      regular_transactions: {
        Row: {
          id: string;
          account_id: string;
          description: string | null;
          start_date: string;
          amount: number;
          type: "수입" | "지출";
          category_id: string;
          frequency: "monthly" | "weekly";
          day_of_month: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          account_id: string;
          description?: string | null;
          start_date: string;
          amount: number;
          type: "수입" | "지출";
          category_id: string;
          frequency: "monthly" | "weekly";
          day_of_month?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          account_id?: string;
          description?: string | null;
          start_date?: string;
          amount?: number;
          type?: "수입" | "지출";
          category_id?: string;
          frequency?: "monthly" | "weekly";
          day_of_month?: number | null;
          created_at?: string;
        };
      };
    };
  };
}
