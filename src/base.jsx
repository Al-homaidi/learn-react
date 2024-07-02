
import { Link } from "react-router-dom";
export default function Base () {
    return (
        <div>
            <h1 className="fs-1 text-red-600">Hello User</h1>
            <p>do you wannna to dashbord</p>
            <a>
                <Link className="hav-bu" to={'/users'}>users</Link>
            </a>
        </div>
    );
}