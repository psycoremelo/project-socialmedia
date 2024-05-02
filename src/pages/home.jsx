import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";
import Posts from "../components/posts";
import { useState } from "react";
import Search from "../components/search";
import Profile from "../components/profile";

export default function Home() {
  const navigate = useNavigate();
  const [page, setPage] = useState("search");
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
  return (
    <main className="h-screen">
      <main className="w-full h-full pb-16 lg:ps16 flex items-center justify-center">
        {page === "home" && <Posts />}
        {page === "search" && <Search />}
        {page === "profile" && <Profile />}
      </main>
      <NavBar setPage={setPage} />
    </main>
  );
}
