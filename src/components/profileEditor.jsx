import { useContext } from "react";
import { Context } from "../context/userContext";
import Cookies from "js-cookie";

export default function ProfileEditor(){
    const {user}=useContext(Context);
    const {userLogIn}=useContext(Context);
    const url="http://127.0.0.1:8000/api/users/"+user.id;
    const updateData= async(data)=>{

        const response = await fetch(url,{method:'put',headers:{'Content-Type': 'application/json'},body:JSON.stringify(data)})
        const responseData=await response.json();
        return responseData;
    }

    
    const handleSubmit=(event)=>{
        event.preventDefault();
        var userData={
            name:document.getElementById("newName").value,
            email:user.email,
            password:user.password
        };
        console.log(userData);
        updateData(userData)
        .then((response)=>{
            console.log(response);               
                userLogIn(response);
                const jsonValue=JSON.stringify(response);
                Cookies.set("userCookie",jsonValue);
            }  
        )
        .catch((error)=>{
            console.error('Error putting data',error);
        })};

    console.log(user)
    return(
        <div>
            <h1>Bienvenue {user.name}</h1>
            <form onSubmit={handleSubmit}>
                <div>
            <input type="text" id="newName" placeholder='Changez de nom'></input>
            </div>
            <div>
            <button type="submit" >Confirmer changement de nom</button>
            </div>
            </form>
        </div>
    )
}