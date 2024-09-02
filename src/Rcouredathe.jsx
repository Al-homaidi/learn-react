import { useContext } from "react";
import { User } from "./context/context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function Rcouredathe() {
  const user = useContext(User);
  const location = useLocation();
  console.log(user);

  return user.auth.userditels ? <Outlet /> : <Navigate state={{from: location}} replace to="/Singin" />;
}
