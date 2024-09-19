import { useContext, useEffect, useState, useCallback } from "react";
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

  const refresh = useCallback(async () => {
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
      cookie.set("Bearer", data.token, { path: "/" });
      
      user.setauth({
        userditels: data.user,
        token: data.token,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [getcookie, cookie, user]);

  useEffect(() => {
    if (!token) {
      refresh();
    } else {
      setLoading(false);
    }
  }, [token, refresh]);

  return loading ? <LoadingScreen /> : <Outlet />;
}
