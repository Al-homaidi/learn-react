import { useState , useEffect } from "react";
function submit(e) {
    e.preventDefault();
}
export default function Singup() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [passward, setpassward] = useState('');
    const [repeatpassword, setrepeatpassword] = useState('');
  return (
    <div className="flex align-items-center justify-between">
      <form onSubmit={submit} action="" className="flex flex-col w-full mt-20 shadow-md p-3">
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
          type="passward"
          className=" bg-slate-200 text-zinc-950 rounded p-1 outline-none"
          name="password"
          id="password"
          placeholder="passwoed"
          value={passward}
          onChange={(e) => setpassward(e.target.value)}
        />
        <label htmlFor="repeatpassword">Repeat Password</label>
        <input
          type="passward"
          name="repeatpassword"
          id="repeatpassword"
          placeholder="Repeat Password..."
          className=" bg-slate-200 text-zinc-950 rounded p-1 outline-none"
          value={repeatpassword}
          onChange={(e) => setrepeatpassword(s.target.value)}
        />
        <div className="flex justify-center">
        <button type="submit" className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white rounded mt-4">Register</button>
        </div>
      </form>
    </div>
  );
}
