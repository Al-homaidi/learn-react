import axios from "axios";
import { useEffect, useState } from "react";

export default function Formogregestar(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repeatpassword, setrepeatpassword] = useState("");
  const [accept, setaccept] = useState(false);
  const [emailerror, setemailerror] = useState(false);

  useEffect(() => {
    setname(props.name);
    setemail(props.email);
  }, [props.name, props.email]);

  async function submit(e) {
    e.preventDefault();
    setaccept(true);
    let falg = true;

    if (name === "" || password.length < 8 || repeatpassword !== password) {
      falg = false;
    }

    try {
      if (falg) {
        let res = await axios.post(
          `http://127.0.0.1:8888/api/${props.endpoint}`,
          {
            name: name,
            email: email,
            password: password,
            password_confirmation: repeatpassword,
          }
        );
        if (res.status === 200) {
          props.havelocalstorig && window.localStorage.setItem("email", email);
          window.location.pathname = `/${props.navigate}`;
        }
      }
    } catch (err) {
      setemailerror(err.response.status);
    }
  }

  return (
    <div className="w-[450px]" style={{ margin: "1px auto" }}>
      <form
        onSubmit={submit}
        action=""
        className="flex flex-col w-full mt-10 shadow-md p-3"
      >
        <label htmlFor="name" className="mb-2">
          Name
        </label>
        <input
          type="text"
          className=" bg-slate-200 text-zinc-950 rounded p-1 outline-none"
          name="name"
          id="name"
          placeholder="name..."
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        {name === "" && accept && (
          <p className="text-red-400">Username is required</p>
        )}
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
        {accept && emailerror === 422 && (
          <p className="text-red-400">Email is already taken</p>
        )}
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <input
          type="password"
          className=" bg-slate-200 text-zinc-950 rounded p-1 outline-none"
          name="password"
          id="password"
          placeholder="password..."
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {password.length < 8 && accept && (
          <p className="text-red-400">
            Password must be more than 8 characters
          </p>
        )}
        <label htmlFor="repeatpassword" className="mb-2">
          Repeat Password
        </label>
        <input
          type="password"
          className=" bg-slate-200 text-zinc-950 rounded p-1 outline-none"
          name="repeatpassword"
          id="repeatpassword"
          placeholder="Repeat Password..."
          value={repeatpassword}
          onChange={(e) => setrepeatpassword(e.target.value)}
        />
        {repeatpassword !== password && accept && (
          <p className="text-red-400">Passwords must match</p>
        )}
        <div className="flex justify-center">
          <button type="submit" className="hav-bu mt-4">
            {props.button}
          </button>
        </div>
      </form>
    </div>
  );
}
