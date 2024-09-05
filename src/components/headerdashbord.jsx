import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

export default function HeaderDashboard() {
  const cookie = new Cookies();
  const token = cookie.get("Bearer");

  if (!token) {
    console.error("Token is missing.");
    return;
  }

  async function relo() {
    try {
      await axios.post("http://127.0.0.1:8888/api/logout", null, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      cookie.remove("Bearer");
      window.location.pathname = "/";
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  }

  return (
    <div className="flex justify-end pe-5 align-items-center pt-3 pb-3 bg-slate-500">
      <Link to={"/"} className="hav-bu ms-3">
        go to website
      </Link>
      <Link onClick={relo} className="hav-bu ms-3">
        log out
      </Link>
    </div>
  );
}
