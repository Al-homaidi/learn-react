import { Link } from "react-router-dom";
import { User } from "../context/context";
import { useContext } from "react";

export default function Header() {
  const user = useContext(User);

  return (
    <div className="flex justify-between items-center pt-3 pb-3 bg-slate-500">
      <ul className="flex justify-between items-center m-0">
        <li>
          <Link className="hav-bu me-3" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="hav-bu" to={"/About"}>
            About
          </Link>
        </li>
      </ul>
      <div className="flex justify-between items-center pe-8">
        {user.auth.userditels ? (
          <>
            <Link to={"/base"} className="hav-bu ms-3">
              Base
            </Link>
          </>
        ) : (
          <>
            <Link to={"/Singin"} className="hav-bu">
              Register
            </Link>
            <Link to={"/login"} className="hav-bu ms-3">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
