import {useState, useEffect, useContext} from 'react';
import ContextProvider from '../context/userContext';
import { Context } from '../context/userContext';
import Partie from '../components/parties_list';
import User from '../components/contextConsumer';
import { Link } from "react-router-dom";

export default function Score(){
    let url="http://127.0.0.1:8000/api/parties"
    const [historique,setHistorique]=useState([]);
    const fetchData= async()=>{
        const response = await fetch(url);
        const data=await response.json();
        return data};
    useEffect(()=>{
        fetchData().then(data=>{
            setHistorique(data.reverse())         
        })
    },[])
    return(
        <div>
            <ContextProvider>
            {historique && historique.map((element,index)=>{
                if(index===0){
                    return(
                        <p key={index}>Bravo, vous avez eu {element.score} bonnes réponses !</p>

                    )
                }})}
            <br></br>
            <Link to="/historique">Voir l'historique des parties</Link>
            </ContextProvider>
        </div>
    )
}