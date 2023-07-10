import User from "../components/contextConsumer";
import LogInForm from "../components/li_form";
import ContextProvider from "../context/userContext";

//page qui contient le composant qui permet la connexion à un compte existant


export default function LogIn(){
    return(
        <div>
            <ContextProvider>
            <LogInForm></LogInForm>
            </ContextProvider>
        </div>
    )
}