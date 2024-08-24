import { createContext, useState } from "react";

export const User = createContext({});

export default function Userprovider({children}) {
    const [auth, setauth] = useState({});
  return <User.Provider value={"red"}>{children}</User.Provider>;
}
