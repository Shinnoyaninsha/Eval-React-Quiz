import {useState} from 'react';
import { Outlet } from "react-router-dom";
import ContextProvider from "../context/userContext";

//Page qui accueille le choix de la catégorie et l'affichage des questions
//Context Provider permet de fournir les informations de connexion aux composants enfants de la page
export default function Questionnaire(){

    
    return(
        <div>
        <ContextProvider>
        <Outlet />
        </ContextProvider>
            
        </div>
    )
}