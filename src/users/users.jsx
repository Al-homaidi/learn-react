import { useState, useEffect, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { User } from "../context/context";
import context from "react-bootstrap/esm/AccordionContext";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [run, setrun] = useState(0);

  const user = useContext(User);
  const token = user.auth.token;


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8888/api/user/show", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        setLoading(false);
      });
  }, [run]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  async function deleteuser(id) {
    try {
      const rt = await axios.delete(
        `http://127.0.0.1:8888/api/user/delete/${id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (rt.status === 200) {
        setrun((rev) => rev + 1);
      }
    } catch {
      // console.log(error);
    }
  }


  const showuser = users.map((user, index) => (
    <tr
      key={user.id}
      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {index + 1}
      </th>
      <td className="px-6 py-4">{user.name}</td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4 flex justify-center align-items-center">
        <Link to={`${user.id}`} className="font-medium fs-4 me-3">
          <FaEdit />
        </Link>
        <a onClick={() => deleteuser(user.id)} className="text-red-700 fs-3">
          <MdDelete />
        </a>
      </td>
    </tr>
  ));

  return (
    <div className="w-full flex-1 pb-10 ">
      <div className="flex justify-between align-items-center">
        <h1 className="p-2">Users</h1>
        <Link className="hav-bu" to={"/base/users/create"}>
          Create User
        </Link>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>{showuser}</tbody>
      </table>
    </div>
  );
}
