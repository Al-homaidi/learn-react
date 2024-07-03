import Headerdashbord from "./components/headerdashbord";
import Sidbar from "./components/sidbar"
import { Outlet } from "react-router-dom";
export default function Base() {
  return (
    <div>
      <Headerdashbord />
      <div className="flex gap-4 pe-4">
        <Sidbar />
        <div className="w-full">
            <Outlet />
        </div>
      </div>
    </div>
  );
}
