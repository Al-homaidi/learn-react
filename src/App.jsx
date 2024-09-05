import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Singup from "./Singup";
import Login from "./login";
import Base from "./base";
import About from "./about";
import Users from "./users/users";
import Edituser from "./users/edituser";
import Createusers from "./users/craetuser";
import Minepage from "./indexbase";
import Rcouredathe from "./Rcouredathe";
import PersistLogin from "./persistLogin";
import Products from "./Products/index.products";
import CreateProducts from "./Products/createproducts";
export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route element={<Rcouredathe />}>
            <Route path="/base" element={<Base />}>
              <Route index element={<Minepage />} />
              <Route path="users" element={<Users />} />
              <Route path="users/create" element={<Createusers />} />
              <Route path="users/:id" element={<Edituser />} />
              <Route path="products" element={<Products />} />
              <Route
                path="products/createproducts"
                element={<CreateProducts />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/Singin" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
