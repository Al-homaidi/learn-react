import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
export default function App() {
  const [moh, setmoh] = React.useState(true);
  function tog() {
    setmoh(v => !v)
  }
  return (
    <div style={{ fontSize: "40px", textAlign: "center" }} onClick={tog}>
      {moh ? "yes" : "No"}
    </div>
  );
}
