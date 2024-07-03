import { Link } from "react-router-dom";
export default function headerdashbord() {
    function clearlocal () {
        window.localStorage.removeItem('email');
        window.location.pathname = "/";
    }
  return (
    <div className="flex justify-end pe-5 align-items-center pt-3 pb-3 bg-slate-500">
        {window.localStorage.getItem("email") ? (
          <>
            <Link to={"/"} className="hav-bu ms-3" onClick={clearlocal}>
              logout
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
  );
}
