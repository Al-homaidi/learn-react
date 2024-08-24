import axios, { Axios } from "axios";
import { useState } from "react";
import Header from "./components/header";
export default function login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [accept, setaccept] = useState(false);
  const [emailerror, setemailerror] = useState(false);
  async function submit(e) {
    let falg = true;
    console.log(falg);
    e.preventDefault();
    setaccept(true);
    if (password.length < 8) {
      falg = false;
    } else falg = true;
    console.log(falg);
    try {
      if (falg) {
        let res = await axios.post("http://127.0.0.1:8888/api/login", {
          email: email,
          password: password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", email);
          console.log(res);
        }
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
          {accept && emailerror === 401 && (
            <p className="text-red-400">Email is not found</p>
          )}
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
