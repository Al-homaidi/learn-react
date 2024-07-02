import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Singup from "./Singup";
import Login from "./login";
import Base from "./base"
export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex align-items-center justify-center">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/base" element={<Base/>} />
          <Route path="/Singin" element={<Singup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
