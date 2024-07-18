import Header from "./components/header";
import Formogregestar from "./components/formogregestar";
export default function Singup() {
  return (
    <div>
      <Header />
      <Formogregestar
        button="Register"
        endpoint="register"
        navigate="/"
        havelocalstorig={true}
      />
    </div>
  );
}
