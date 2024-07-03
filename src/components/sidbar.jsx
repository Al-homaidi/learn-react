import { Link } from "react-router-dom";
export default function sidbar() {
  return (
    <div className="p-3 shadow w-[200px] h-[100vh]">
      <ul>
        <li>
          <Link to={"/base/users"}>users</Link>
        </li>
      </ul>
    </div>
  );
}
