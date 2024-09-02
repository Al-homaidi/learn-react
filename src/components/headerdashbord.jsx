import { Link } from "react-router-dom";
export default function headerdashbord() {
function relo () {
  window.location.reload();
}
  return (
    <div className="flex justify-end pe-5 align-items-center pt-3 pb-3 bg-slate-500">
          <>
            <Link to={"/"} className="hav-bu ms-3">
              go to wipsite
            </Link>
          </>
          <>  
            <Link onClick={relo} className="hav-bu ms-3">
              log out
            </Link>
          </>
      </div>
  );
}
