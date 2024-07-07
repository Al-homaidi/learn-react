import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [run, setrun] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8888/api/user/show")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(
        (data) => {
          setUsers(data);
          setLoading(false);
          console.log(data);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
  }, [run]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  async function deleteuser(id) {
    try {
        const rt = await axios.delete(`http://127.0.0.1:8888/api/user/delete/${id}`);
        if (rt.status === 200) {
            setrun((rev) => rev + 1);
        }
    } catch {
        console.log("none");
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
    <div className="w-full flex-1">
      <h1 className="p-2">Users</h1>
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