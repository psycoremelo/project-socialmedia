import { Navigate } from "react-router-dom";

export default function Auth({children}) {
  let token = localStorage.getItem("token");
  return <Navigate to={"/login"} replace={true}/>
}