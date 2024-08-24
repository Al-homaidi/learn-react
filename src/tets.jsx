import { useContext } from "react";
import { User } from "./context/context";

function MyButton() {
  return (
    <button
      className=" mt-10 ms-10"
      style={{ background: "#afafaf" }}
      type="button"
    >
      I'm a button
    </button>
  );
}

export default function Test() {
  const color = useContext(User);
  console.log(color);
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <User>
        {(e) => {
          return <h1>{e}</h1>;
        }}
      </User>
    </div>
  );
}
