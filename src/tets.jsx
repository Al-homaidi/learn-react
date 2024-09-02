
function MyButton() {
  return (
    <button
      className=" mt-10 ms-10"
      style={{ background: "#afafaf" }}
      type="button"
    >
      I'm a button
    </button>
  );
}

export default function Test() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
