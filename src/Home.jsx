import Header from "./components/header";

export default function Home() {
  window.localStorage.setItem(
    "img",
    "/beautiful-mountain-lake-background-remix.jpg"
  );
  return (
    <div>
      <Header />
      <div className="" style={{ height: "calc(100vh - 80px)" }}>
        <img
          className="object-cover w-[100%] h-[100%]"
          src={window.localStorage.getItem("img")}
          alt="Beautiful Mountain Lake"
        />
      </div>
    </div>
  );
}
