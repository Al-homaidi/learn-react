import axios, { Axios } from "axios";
import { useContext, useState } from "react";
import Header from "./components/header";
import { User } from "./context/context";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
export default function login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [accept, setaccept] = useState(false);
  const [emailerror, setemailerror] = useState(false);
  const userlogn = useContext(User);
  const nav = useNavigate();
  const cookie = new Cookies();


  async function submit(e) {

    let falg = true;
    e.preventDefault();
    setaccept(true);

    if (password.length < 8) {
      falg = false;
    } else falg = true;

    try {
      if (falg) {
        let res = await axios.post("http://127.0.0.1:8888/api/login", {
          email: email,
          password: password,
        });
        const token = res.data.data.token;
        cookie.set('Bearer', token)
        const userditels = res.data.data.user;
        userlogn.setauth({ token, userditels });
        nav('/base')
      }
    } catch (err) {
      setemailerror(err.response.status);
    }
  }
  return (
    <div>
      <Header />
      <div className="w-[450px]" style={{ margin: "1px auto" }}>
        <form
          onSubmit={submit}
          action=""
          className="flex flex-col w-full mt-10 shadow-md p-3"
        >
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="email"
            className=" bg-slate-200 text-zinc-950 rounded p-1 outline-none"
            name="email"
            id="email"
            placeholder="email..."
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            className=" bg-slate-200 text-zinc-950 rounded p-1 outline-none"
            name="password"
            id="password"
            placeholder="passwoed"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {password.length < 8 && accept && (
            <p className="text-red-400">password must be more than 8 char</p>
          )}
            {accept && emailerror === 401 && (
            <p className="text-red-400">Email is not found Or your password is not correct</p>
          )}
          <div className="flex justify-center">
            <button type="submit" className="hav-bu mt-4">
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
