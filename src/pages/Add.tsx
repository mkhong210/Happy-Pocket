import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import AddForm from "../components/AddForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { supabase } from "../utils/supabase";

export type AddFormData = {
  date: string;
  amount: number;
  type: "수입" | "지출";
  description: string;
  category_id: string;
  source: "record" | "regular";
  day_of_month?: number | null;
};

const Add: React.FC = () => {
  const [params] = useSearchParams();
  const type = params.get("type") as "record" | "regular";

  const navigate = useNavigate();

  if (!type || (type !== "record" && type !== "regular")) {
    return <p>잘못된 접근입니다.</p>;
  }

  // 계좌 id
  const location = useLocation();
  const accountId = location.state?.accountId;

  if (!accountId) {
    return <div>계좌 정보가 없습니다.</div>;
  }

  // 데이터 저장
  const handleSave = async (data: AddFormData) => {
    if (data.source === "record") {
      const { error } = await supabase.from("records").insert({
        date: data.date,
        amount: data.amount,
        type: data.type,
        description: data.description,
        category_id: data.category_id,
        account_id: accountId,
      });

      if (error) {
        alert("저장 실패: " + error.message);
        return;
      }

      alert("거래 저장 완료!");
      navigate("/main");
    }

    if (data.source === "regular") {
      const { error } = await supabase.from("regular_transactions").insert({
        day_of_month: data.day_of_month,
        amount: data.amount,
        type: data.type,
        description: data.description,
        category_id: data.category_id,
        account_id: accountId,
      });

      if (error) {
        alert("저장 실패: " + error.message);
        return;
      }

      alert("고정 거래 저장 완료!");
      navigate("/main");
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4 text-center">
          {type === "record" ? "일반 지출/수입 추가" : "고정 지출/수입 추가"}
        </h2>
        <AddForm
          source={type}
          onSubmit={handleSave}
          // onSubmit={(data) => console.log("저장!", data)}
        />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Add;
