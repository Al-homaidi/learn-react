import { Link } from "react-router-dom";
export default function sidbar() {
  return (
    <div className="p-3 shadow w-[200px] min-h-[100vh]">
      <ul>
        <li>
          <Link to={"/base"}>Home</Link>
        </li>
        <li>
          <Link to={"/base/users"}>users</Link>
        </li>
        <li>
          <Link to={"/base/products"}>Products</Link>
        </li>
      </ul>
    </div>
  );
}
