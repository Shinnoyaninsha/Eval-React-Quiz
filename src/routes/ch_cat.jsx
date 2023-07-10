import Categorie from "../components/categories";
import {useEffect, useState} from 'react';
import { Outlet } from "react-router-dom";
//Page qui contient la liste des catégories avec un lien vers les questions de la catégorie sélectionnée
//utilisation du component Categorie qui affiche les boutons

var fetched=0;
export default function ChCat(){
    
    const fetchData= async()=>{
        const response = await fetch(url);
        const data=await response.json();
        return data};
    const [cat, setCat]=useState([]);
    let url="http://127.0.0.1:8000/api/categories"
    
    if(fetched===0){
    fetchData().then(data=>{
    setCat(data);
    fetched=1;
          });
    }
return(
        <div>
            <h2>Choisissez une catégorie</h2>
            {cat &&
                cat.map((element)=>{
                    return (
                      <Categorie key={element.id} categorie={element} toQuestions={()=>window.location.assign('/questions/'+element.categorie)}></Categorie>
                    )
                
                  })}            
        </div>
    )
}