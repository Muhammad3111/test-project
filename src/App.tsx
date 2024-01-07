import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useAuth } from "./context/Auth";
import toast from "react-hot-toast";
import { useEffect } from "react";

function App() {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.username && user.password === "Oybek") {
      toast.success("Xush kelibsiz");
      navigate("/");
    } else {
      toast.error("Foydalanuvchi nomi yoki Parol xato");
    }
  }, [user, navigate]);
  console.log(user);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        index
        element={
          user.username && user.password === "Oybek" ? (
            <Home />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
