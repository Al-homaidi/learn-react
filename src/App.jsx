import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Singup from "./Singup";
import Login from "./login";
import Base from "./base"
import Users from "./users"
import About from "./about";
export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/base" element={<Base/>} />
          <Route path="/Singin" element={<Singup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/base/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}
