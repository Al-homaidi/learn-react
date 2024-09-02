import { useEffect, useState } from "react";
import Formogregestar from "./components/formogregestar";
import { useNavigate } from "react-router-dom";
export default function edituser() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const nav = useNavigate();

  const id = window.location.pathname.split("/").slice(-1)[0];
  useEffect(() => {
    fetch(`http://127.0.0.1:8888/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setname(data[0].name);
        setemail(data[0].email);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Formogregestar
        button="Edit"
        name={name}
        email={email}
        endpoint={`user/update/${id}`}
        navigate="base/users"
        havelocalstorig={false}
      />
    </div>
  );
}
