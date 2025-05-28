// src/pages/Login.tsx
import { useState } from "react";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      navigate("/main"); // 로그인 성공 시 홈으로
    }
  };

  return (
    // <div className="login-container">
    //   <h2>로그인</h2>
    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="email"
    //       placeholder="이메일"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //     <input
    //       type="password"
    //       placeholder="비밀번호"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //     {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
    //     <button type="submit">로그인</button>
    //   </form>
    // </div>
    <div className="max-w-md mx-auto mt-24 p-8 bg-white rounded-lg shadow-md font-sans text-center">
      {/* 로고 영역 */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-600 text-yellow-300 tracking-tight">
          Happy Pocket
        </h1>
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">로그인</h2>
      <form className="flex flex-col" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-5 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mb-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        {errorMsg && (
          <p className="mb-4 text-sm font-semibold text-red-600">{errorMsg}</p>
        )}
        <button
          type="submit"
          className="py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
