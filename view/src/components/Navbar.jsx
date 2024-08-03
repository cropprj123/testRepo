import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import useLogOut from "../hooks/useLogout";

const Navbar = () => {
  const user = useRecoilValue(userAtom);
  const logout = useLogOut();

  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link to="/" style={{ margin: "0 10px" }}>
        Home
      </Link>
      {!user ? (
        <>
          <Link to="/login" style={{ margin: "0 10px" }}>
            Login
          </Link>
          <Link to="/signup" style={{ margin: "0 10px" }}>
            Sign Up
          </Link>
        </>
      ) : (
        <button
          onClick={logout}
          style={{ margin: "0 10px", cursor: "pointer" }}
        >
          Logout
        </button>
      )}
      <Link to="/reviews" style={{ margin: "0 10px" }}>
        Reviews
      </Link>
    </nav>
  );
};

export default Navbar;
