import { useNavigate } from "react-router-dom";
// import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login",{replace: true})
  }
  return(
    <main>
      <button onclick={logout}>LOGOUT</button>
    </main>
  );
}