import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Singup from "./Singup";
import Login from "./login";
import Base from "./base";
import About from "./about";
import Users from "./users";
import Edituser from "./edituser";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base" element={<Base />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<Edituser />}/>
        </Route>
        <Route path="/Singin" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/base/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
