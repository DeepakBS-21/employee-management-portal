import { useContext } from "react";
import UserContext from "../../context/UserContext";

function UserInfo() {

    const user = useContext(UserContext);

    return(
        <div>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
        </div>
    );
}

export default UserInfo;