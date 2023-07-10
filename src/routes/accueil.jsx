import { Link } from "react-router-dom";
import ContextProvider, { Context } from "../context/userContext";
import { useContext } from "react";
import User from "../components/contextConsumer";
//Page principale qui permet le choix entre s'inscrire, se connecter ou jouer en tant qu'invité

export default function Accueil(){
    return(
        <p> 
            <ContextProvider>  
            <Link to="/signup" >S'inscrire <br></br></Link>
            <Link to="/login" >Se connecter<br></br></Link>
            <Link to="/questions" >Jouer sans se connecter<br></br></Link>
            </ContextProvider>
        </p>
    )
}