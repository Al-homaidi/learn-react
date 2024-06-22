import React, {useEffect, useState } from "react";
import Name from "./components/name";

export default function App() {
  const [showdata, setshowdata] = useState([]);

  const datashow = showdata.map((item) => <Name name={item}/>)

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then((res) => res.json())
    .then((data) => setshowdata(data.data.memes.map((e) => e.name)));
  });
  return (
    <div>{datashow}</div>
  );
  
}
