import {useState, useEffect, useContext} from 'react';
import ContextProvider from '../context/userContext';
import { Context } from '../context/userContext';
import Partie from '../components/parties_list';
import User from '../components/contextConsumer';

export default function Historique(){
    let url="http://127.0.0.1:8000/api/parties"
    const [historique,setHistorique]=useState([]);
    const fetchData= async()=>{
        const response = await fetch(url);
        const data=await response.json();
        return data};
    useEffect(()=>{
        fetchData().then(data=>{
            setHistorique(data.reverse())         
        }).catch((error)=>{
            console.log("Error",error)
        })
    },[])
    return(
        <div>
            <ContextProvider>
            {historique && historique.map((element,index)=>{
                return (
                    <Partie key={index} partie={element} ></Partie>
                )
            })}
            </ContextProvider>
        </div>
    )
}