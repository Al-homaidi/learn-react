import { Link } from "react-router-dom";
export default function Products() {
  return (
    <div>
      <div className="flex justify-between align-items-center">
        <h1 className="p-2">Productes</h1>
        <Link className="hav-bu" to={"/base/products/createproducts"}>
          Create Producte
        </Link>
      </div>
      <div>
        <div className="row">
            <div className="col-6">
                shaodw
            </div>
            <div className="col-6">
                sahdow
            </div>
        </div>
      </div>
    </div>
  );
}
