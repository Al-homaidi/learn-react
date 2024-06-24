
import { useEffect ,useState } from "react";
import Name from "./components/name";
export default function App() {
  const [data,setdata] = useState([]);
  const showdata = data.map((item) => <Name name={item} id={item} kye={item} $$typeof={item}/>);
  console.log(showdata);
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then((resalt) => resalt.json()).
    then((data) => setdata(data.data.memes.map((itime) => itime.name)));
  },[])
  return <div>{showdata}</div>;
}
