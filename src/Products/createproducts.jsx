import axios from "axios";
import { useContext, useState } from "react";
import { User } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function CreateProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [accept, setAccept] = useState(false);
  const nav = useNavigate();

  const user = useContext(User);
  const token = user?.auth?.token;

  async function submit(e) {
    e.preventDefault();
    setAccept(true);

    if (title.length < 1 || description.length < 20 || !image) {
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      let res = await axios.post("http://127.0.0.1:8888/api/product/create", formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      console.log(error);
    }
    nav('/base/products')
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col w-full mt-10 shadow-md p-3"
    >
      <label htmlFor="title" className="mb-2">
        Title
      </label>
      <input
        type="text"
        className="bg-slate-200 text-zinc-950 rounded p-1 outline-none mb-2"
        id="title"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {accept && title.length < 1 && (
        <p className="text-red-400">Title must be more than one character.</p>
      )}

      <label htmlFor="description" className="mb-2">
        Description
      </label>
      <input
        type="text"
        className="bg-slate-200 text-zinc-950 rounded p-1 outline-none"
        id="description"
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {accept && description.length < 20 && (
        <p className="text-red-400">
          Description must be more than twenty characters.
        </p>
      )}

      <label htmlFor="image" className="mb-2">
        Image
      </label>
      <input
        type="file"
        className="bg-slate-200 text-zinc-950 rounded p-1 outline-none"
        id="image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      {accept && !image && (
        <p className="text-red-400">The image is required.</p>
      )}

      <div className="flex justify-center">
        <button type="submit" className="hav-bu mt-4">
          Create
        </button>
      </div>
    </form>
  );
}
