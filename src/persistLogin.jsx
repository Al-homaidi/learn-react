import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { User } from "./context/context";
import axios from "axios";
import LoadingScreen from "../src/components/loading";
import Cookies from "universal-cookie";

export default function PersistLogin() {
  const user = useContext(User);
  const token = user.auth.token;
  const [loading, setLoading] = useState(true);
  const cookie = new Cookies();

  const getcookie = cookie.get("Bearer");

  useEffect(() => {
    async function refresh() {
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:8888/api/refresh",
          null,
          {
            headers: {
              Authorization: "Bearer " + getcookie,
            },
          }
        );
        cookie.set("Bearer", data.token);
        
        user.setauth((prev) => ({
            userditels: data.user,
            token: data.token,
        }));
    } catch (err) {
        console.log(err);
    } finally {
        setLoading(false);
    }
}

    if (!token) {
      refresh();
    } else {
      setLoading(false);
    }
  }, [token, getcookie]);

  return loading ? <LoadingScreen /> : <Outlet />;
}
