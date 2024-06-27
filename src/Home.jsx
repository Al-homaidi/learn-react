export default function home () {
    return (
        <div>
            <div className="navbar p-0" style={{background: '#838993'}}>
                <ul className="flex align-items-center justify-between">
                    <li className="ps-5"><a className="no-underline text-white" href="">Home</a></li>
                    <li className="ps-5"><a className="no-underline text-white" href="">About</a></li>
                    <li className="ps-5"><a className="no-underline text-white" href="">servs</a></li>
                    <li className="ps-5"><a className="no-underline text-white" href="">contact</a></li>
                </ul>
                <div>
                    <a href="" className="no-underline text-white">Singin</a>
                    <a href="" className="no-underline text-white ps-5">login</a>
                </div>
                <img className=" w-[100px]" src="../public/2b7ec246-1b30-4ea6-9445-ef5ee59f8d68.webp" alt="" />
            </div>
            <div>
                <img src="../public/beautiful-mountain-lake-background-remix.jpg" alt="" />
            </div>
        </div>
    );
}