import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Layout from "./layout/layout";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* 공통 레이아웃 */}
        {/* <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        /> */}

        <Route
          path="/main"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/add"
          element={
            <Layout>
              <Add />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
