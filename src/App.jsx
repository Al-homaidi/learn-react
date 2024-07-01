import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Singup from "./Singup";
import Login from "./login";
export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex align-items-center justify-center">
        <Routes>
          <Route path="/Singin" element={<Singup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
