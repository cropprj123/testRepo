import "./App.css";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ReviewsPage from "./pages/ReviewsPage"; // Import the ReviewsPage
import SignupPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const user = useRecoilValue(userAtom);

  const [isLoading, setIsloading] = useState(true);

  return (
    <>
      <Navbar /> {/* Add the Navbar */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />{" "}
        {/* Add the ReviewsPage route */}
      </Routes>
    </>
  );
}

export default App;
