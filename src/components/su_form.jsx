import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function SignUpForm(){
    const url="http://127.0.0.1:8000/api/users";

    const postData= async(data)=>{

        const response = await fetch(url,{method:'post',headers:{'Content-Type': 'application/json'},body:JSON.stringify(data)})
        const responseData=await response.json();
        return responseData;
    }

    
    const handleSubmit=(event)=>{
        event.preventDefault();
        var userData={
            name: document.getElementById("prenom").value,
            email:document.getElementById("email").value,
            password:document.getElementById("pwd").value
        };
        console.log(userData);
        postData(userData)
        .then((response)=>{
            console.log('Data posted successfully',response);          
        }).then(()=>{window.location.assign("/login")})
        .catch((error)=>{
            console.error('Error posting data',error);
        });
    }


    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label>
                Prénom: 
                <input type="text" name="prenom" id="prenom">
                </input>
            </label>
            </div>
            <div>
            <label>
                Email: 
                <input type="email" name="email" id="email" >
                </input>
            </label>
            </div>
            <div>
            <label>
                Mot de passe: 
                <input type="password" name="pwd" id="pwd" >
                </input>
            </label>
            </div>
            <button type='submit'>S'inscrire</button>      
        </form>
        
    )

}