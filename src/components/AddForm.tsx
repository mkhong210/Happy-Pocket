import { useEffect, useState } from "react";
import type { Database } from "../../types_db";
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

interface AddFormProps {
  source: "record" | "regular"; // 일반 / 고정 선택
  onSubmit: (data: AddFormData) => void;
}

type Category = Database["public"]["Tables"]["categories"]["Row"];

const AddForm: React.FC<AddFormProps> = ({ source, onSubmit }) => {
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<"수입" | "지출">("지출");
  const [description, setDescription] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [dayOfMonth, setDayOfMonth] = useState<number | null>(null);

  // 데이터 빈값일 때
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!description) newErrors.description = "설명을 입력해주세요.";
    if (!categoryId) newErrors.categoryId = "카테고리를 선택해주세요.";
    if (!amount || amount <= 0) newErrors.amount = "금액은 0보다 커야 해요.";
    if (source === "record" && !date) newErrors.date = "날짜를 선택해주세요.";
    if (
      source === "regular" &&
      (!dayOfMonth || dayOfMonth < 1 || dayOfMonth > 31)
    )
      newErrors.dayOfMonth = "날짜는 1~31 사이여야 해요.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit({
      date,
      amount,
      type,
      description,
      category_id: categoryId,
      source,
      day_of_month: source === "regular" ? dayOfMonth : null,
    });
  };

  useEffect(() => {
    // const fetchCategories = async (): Promise<Category[]> => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select("*");

      if (error) {
        console.error("카테고리 불러오기 오류:", error);
        return [];
      }

      setCategories(data as Category[]);
    };
    fetchCategories();
  }, []);

  return (
    // <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
    //   {source === "record" && (
    //     <input
    //       type="date"
    //       value={date}
    //       onChange={(e) => setDate(e.target.value)}
    //       className="border p-2"
    //       required
    //     />
    //   )}
    //   {source === "regular" && (
    //     <input
    //       type="number"
    //       value={dayOfMonth ?? ""}
    //       onChange={(e) => setDayOfMonth(Number(e.target.value))}
    //       placeholder="날짜"
    //       min={1}
    //       max={31}
    //       className="border p-2"
    //       required
    //     />
    //   )}

    //   <input
    //     type="text"
    //     value={description}
    //     onChange={(e) => setDescription(e.target.value)}
    //     placeholder="설명"
    //     className="border p-2"
    //   />

    //   <select
    //     value={type}
    //     onChange={(e) => setType(e.target.value as "수입" | "지출")}
    //     className="border p-2"
    //     required
    //   >
    //     <option value="수입">수입</option>
    //     <option value="지출">지출</option>
    //   </select>

    //   <select
    //     value={categoryId}
    //     onChange={(e) => setCategoryId(e.target.value)}
    //     className="border p-2"
    //     required
    //   >
    //     <option value="">카테고리 선택</option>
    //     {categories
    //       .filter((cat) => cat.type === type)
    //       .map((cat) => (
    //         <option key={cat.id} value={cat.id}>
    //           {cat.name}
    //         </option>
    //       ))}
    //   </select>

    //   <input
    //     type="number"
    //     value={amount}
    //     onChange={(e) => setAmount(Number(e.target.value))}
    //     placeholder="금액"
    //     className="border p-2"
    //     required
    //   />

    //   <button type="submit" className="bg-blue-500 text-white p-2 rounded">
    //     저장
    //   </button>
    // </form>

    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 space-y-4"
    >
      {source === "record" && (
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">날짜</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
      )}

      {source === "regular" && (
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            매월 며칠
          </label>
          <input
            type="number"
            value={dayOfMonth ?? ""}
            onChange={(e) => setDayOfMonth(Number(e.target.value))}
            min={1}
            max={31}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {errors.dayOfMonth && (
            <p className="text-red-500 text-sm mt-1">{errors.dayOfMonth}</p>
          )}
        </div>
      )}

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">설명</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">유형</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "수입" | "지출")}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="수입">수입</option>
          <option value="지출">지출</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">
          카테고리
        </label>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">카테고리 선택</option>
          {categories
            .filter((cat) => cat.type === type)
            .map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
        </select>
        {errors.categoryId && (
          <p className="text-red-500 text-sm mt-1">{errors.categoryId}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">금액</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        {errors.amount && (
          <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
      >
        저장
      </button>
    </form>
  );
};

export default AddForm;
