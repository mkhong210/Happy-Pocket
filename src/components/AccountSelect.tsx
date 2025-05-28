import type React from "react";

interface Props {
  accounts: { id: string; name: string }[];
  selectedAccountId: string;
  setSelectedAccountId: (id: string) => void;
}

const AccountSelect: React.FC<Props> = ({
  accounts,
  selectedAccountId,
  setSelectedAccountId,
}) => {
  return (
    <div className="mb-4 bg-white">
      <select
        aria-label="계좌 선택"
        value={selectedAccountId}
        onChange={(e) => setSelectedAccountId(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        {accounts.map((acc) => (
          <option key={acc.id} value={acc.id}>
            {acc.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AccountSelect;
