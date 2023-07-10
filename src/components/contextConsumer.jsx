import { useContext } from "react";
import { Context } from "../context/userContext";


export default function User(){
    const {user} =useContext(Context);
    const {userLogIn}=useContext(Context);
    return(
        <div>
        <h1>{user.id}</h1>
        </div>
    )
}