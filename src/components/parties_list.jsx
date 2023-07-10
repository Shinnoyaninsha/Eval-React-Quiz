import { useContext } from "react"
import { Context } from "../context/userContext"

export default function Partie({partie}){
    const {user}=useContext(Context)
    if(partie.idjoueur===user.id){
return(
    <div>
                <p>Score : {partie.score}, partie du {partie.created_at.slice(0,16).replace("T"," ")} en catégorie {partie.categorie}</p>

        </div>
)
    }
}