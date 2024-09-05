import { useContext } from "react";
import { User } from "./context/context";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

export default function Rcouredathe() {
  const user = useContext(User);
  const location = useLocation();
  const cookies = new Cookies();

  return user.auth.userditels ? <Outlet /> : <Navigate state={{from: location}} replace to="/Singin" />;
} 
