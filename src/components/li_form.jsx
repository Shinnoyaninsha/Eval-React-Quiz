import { useContext } from "react";
import { Context } from "../context/userContext";
import Cookies from 'js-cookie';


export default function LogInForm(){
    const url="http://127.0.0.1:8000/api/users";
    const {userLogIn}=useContext(Context);
    const {user}=useContext(Context);


    const getData= async()=>{

        const response = await fetch(url)
        const responseData=await response.json();
        return responseData;
    }

    
    const handleSubmit=(event)=>{
        event.preventDefault();
        var userData={
            email:document.getElementById("email").value,
            password:document.getElementById("pwd").value
        };
        console.log(userData);
        getData()
        .then((response)=>{
            console.log('Data fetched successfully',response);
            var check=response.filter((element)=>{
                return element.email===userData.email                
            });
            if(check[0] &&userData.password===check[0].password){
                
                userLogIn(check[0]);
                const jsonValue=JSON.stringify(check[0]);
                Cookies.set("userCookie",jsonValue);
                window.location.assign("/profile")
            }   else {
                document.getElementById("check mdp").innerHTML+="Mot de passe faux veuillez réessayer plus lentement"
            }      
        })
        .catch((error)=>{
            console.error('Error fetching data',error);
        })};


    return(
        <div>
        <form onSubmit={handleSubmit}>
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
            <button type='submit'>Se connecter</button>      
        </form>
        <p id="check mdp">

        </p>
        </div>
        
    )

    }