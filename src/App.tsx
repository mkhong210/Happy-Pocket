import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Add from "./pages/Add";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>

      <div className="text-2xl text-blue-500 font-bold p-4">
        Tailwind 적용 완료 🎉
      </div>
    </>
  );
}

export default App;
