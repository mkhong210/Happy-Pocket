import type React from "react";

const AccountSelect: React.FC = () => {
  return (
    <div className="mb-4">
      <select
        aria-label="계좌 선택"
        value={"아이디"}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focu	:ring-yellow-500"
      ></select>
    </div>
  );
};

export default AccountSelect;
