import Formogregestar from "./components/formogregestar";
export default function Crateuser() {
  return (
    <Formogregestar
      button="Create"
      endpoint="user/create"
      havelocalstorig={false}
      navigate="base/users"
    />
  );
}
