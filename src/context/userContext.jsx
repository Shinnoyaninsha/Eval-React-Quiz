import React, {createContext, useState} from 'react';
import Cookies from 'js-cookie';
export const Context= createContext();
//initialisation du Contexte

const ContextProvider= (props)=>{
    //tentative de récupération d'un cookie de session
    const userCookie=()=>{
        var cookie
        try{
        cookie=Cookies.get("userCookie");
        cookie=JSON.parse(cookie);
    }
    //si pas de cookie de session, utilisation du cookie d'invité
        catch{
            cookie={
            id:"0",
            name:"Invité",
            password:""
        }}
        return cookie
    }
    //initialisation du state qui contient l'objet user qui contient tous les éléments du Get /users
    const [user,setUser]= useState(userCookie);
    //setter personnalisé fourni grâce au Context Provider
    const userLogIn= userToLog=>{
        setUser(userToLog)
    }
    
    return(
        <Context.Provider value={{user,userLogIn}}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider