import { useContext } from "react";
import ContextProvider, { Context } from "../context/userContext";
import { Link } from "react-router-dom";
import ProfileEditor from "../components/profileEditor";
//Page qui contient le component qui permet d'éditer le nom du profil
//Le contexte fournit l'information sur le compte connecté grâce au cookie de session
export default function Profile(){
    return(
        <ContextProvider>
            <ProfileEditor ></ProfileEditor>
            <Link to="/questions">Jouer au quiz</Link>
        </ContextProvider>
    )

}