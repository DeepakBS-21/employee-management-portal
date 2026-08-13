import { createContext } from "react";

const UserContext = createContext({
    name: "Deepak",
    role:"Admin",
});

export default UserContext;