import "./App.css";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ReviewsPage from "./pages/ReviewsPage";
import SignupPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPage from "./pages/AdminPage";

function App() {
  const user = useRecoilValue(userAtom);
  const [isLoading, setIsloading] = useState(true);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Routes accessible to everyone */}
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />

        {/* Routes accessible if not logged in */}
        {!user && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
        )}

        {/* Routes accessible if logged in */}
        {user && (
          <>
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<AdminPage />}></Route>
            {/* Admin-only routes */}
            {/* <Route
              path="/admin"
              element={
                <ProtectedRoute roles={["admin"]} element={<AdminPage />} />
              }
            /> */}

            {/* User-only routes */}
            {/* <Route
              path="/user"
              element={
                <ProtectedRoute roles={["user"]} element={<UserPage />} />
              }
            /> */}
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
