import { useNavigate } from "react-router-dom";
import AccountSelect from "../components/AccountSelect";
import CalendarView from "../components/CalendarView";
import ListView from "../components/ListView";
// import Monthly from "../components/Monthly";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getAccounts } from "../utils/accounts";
import { MergedTransactions } from "../hooks/MergedTransactions";
import AddButton from "../components/AddButton";

const Home: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState<{ id: string; name: string }[]>([]);
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");

  // 월 단위
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // 로그인 유무 확인
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  // 로그인 후 계좌 불러오기
  useEffect(() => {
    if (!user) return;

    const fetchAccounts = async () => {
      const data = await getAccounts(user.id);
      setAccounts(data);
      if (data.length > 0) {
        setSelectedAccountId(data[0].id);
      }
    };

    fetchAccounts();
  }, [user]);

  const merged = MergedTransactions(selectedAccountId, selectedMonth);

  if (loading) return <p>로딩 중...</p>;

  return (
    <>
      <section className="container_wrap">
        {/* {user ? <p>환영합니다, {user.email}!</p> : <p>로그인이 필요합니다.</p>} */}

        <AccountSelect
          accounts={accounts}
          selectedAccountId={selectedAccountId}
          setSelectedAccountId={setSelectedAccountId}
        />

        {/* <Monthly
          selectedAccountId={selectedAccountId}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        /> */}

        <div className="flex flex-col md:flex-row gap-6">
          <div className="grow-6">
            <CalendarView
              mergedRecords={merged}
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
            />
          </div>
          <div className="md:w-1/2">
            <ListView mergedRecords={merged} />
          </div>
        </div>
        <AddButton accountId={selectedAccountId}></AddButton>
      </section>
    </>
  );
};

export default Home;
