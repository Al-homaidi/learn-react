import { Link } from "react-router-dom";
import "./productes.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { User } from "../context/context";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ContentLoader from "react-content-loader";

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useContext(User);
  const token = user.auth.token;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8888/api/product/show", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [token]);

  async function deleteProduct(id) {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8888/api/product/delete/${id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 200) {
        setData(data.filter((product) => product.id !== id));
      }
    } catch (error) {
      console.error(
        "There was an error deleting the product:",
        error.response ? error.response.data : error.message
      );
    }
  }

  console.log(data.length);

  const skeletonLoaderArray = Array(data.length || 4).fill(
    <div className="col-ms-12 col-md-6 col-lg-4 mb-3 overflow-hidden">
      <ContentLoader viewBox="0 0 400 200" width={400} height={200}>
        <rect x="0" y="0" rx="10" ry="10" width="400" height="200" />
      </ContentLoader>
    </div>
  );

  const showProduct = data.map((product, index) => (
    <div className="col-ms-12 col-md-6 col-lg-4 mb-3" key={product.id}>
      <div className="card justify-content-between">
        <div
          className="d-flex flex-column justify-content-between"
          style={{ padding: ".4rem" }}
        >
          <div className="card-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="category">{product.title}</div>
          <div className="heading">{product.description}</div>
        </div>
        <div
          className="d-flex justify-content-between ps-2 pe-2"
          style={{ background: "#ececec" }}
        >
          <div className="heading">{index + 1}</div>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`${product.id}`} className="font-medium fs-4 me-3">
              <FaEdit />
            </Link>
            <button
              onClick={() => deleteProduct(product.id)}
              className="text-red-700 fs-3 bg-transparent border-0"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="flex justify-between align-items-center">
        <h1 className="p-2">Products</h1>
        <Link className="hav-bu" to={"/base/products/createproducts"}>
          Create Product
        </Link>
      </div>
      <div>
        <div className="row">
          {loading ? (
            skeletonLoaderArray
          ) : (
            showProduct
          )}
        </div>
      </div>
    </div>
  );
}
