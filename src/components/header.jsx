import { Link } from "react-router-dom";
export default function Header() {
    function clearlocal () {
        window.localStorage.removeItem('email');
        window.location.pathname = "/";
    }

  return (
    <div className="flex justify-between align-items-center pt-3 pb-3 bg-slate-500">
      <ul className="flex justify-between align-items-center m-0">
        <li>
            <Link className="hav-bu me-3" to={'/'}>Home</Link>
        </li>
        <li>
            <Link className="hav-bu" to={'/About'}>About</Link>
        </li>
      </ul>
      <div className="flex justify-between align-items-center pe-8">
        {window.localStorage.getItem('email') ? 
        <>
        <Link to={'/base'} className="hav-bu ms-3">Base</Link>
        </> :       
        <>
        <Link to={'/Singin'} className="hav-bu">Register</Link>
        <Link to={'/login'} className="hav-bu ms-3">login</Link> 
        </>}
      </div>
    </div>
  );
}
