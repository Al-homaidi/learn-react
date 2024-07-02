import Header from "./components/header";
export default function home () {
    window,localStorage.setItem('img', '../public/beautiful-mountain-lake-background-remix.jpg');
    return (
        <div>
            <Header />
            <img src={window.localStorage.getItem('img')} alt="" />
        </div>
    );
}