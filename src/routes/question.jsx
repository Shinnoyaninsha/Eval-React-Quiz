import Questions from "../components/reponses";
import {useEffect, useState, useContext} from 'react';
import { useMediaQuery } from "react-responsive";
import { Context } from "../context/userContext";
import { LaptopQuestionHeader, LaptopQuestionWrapper } from "../components/laptop/laptop.questions";
import { MobileQuestionHeader, MobileQuestionWrapper } from "../components/mobile/mobile.questions";
import Reponses from "../components/reponses";

var fetched=0;
var numQues;
let timer=null;
//Page qui contient l'ensemble des questions/réponses et qui affiche une question au hasard parmi la catégorie sélectionnée


export default function Question(categorie){
    const [filteredQues, setFilteredQues]=useState([]);
    const [compteur,setCompteur]=useState(10);
    const [answers,setAnswers]=useState([]);
    const [right_answer,setRightAnswer]=useState("");
    const [nbQuestions,setNbQuestions]=useState(0);
    const [nbJustes, setNbJustes]=useState(0);
    const [isCounting,setIsCounting]=useState(true);
    const {user}=useContext(Context)
    
    const isMobileDevice=useMediaQuery({
        query:"(max-device-width:375px)"
    })
    const isLaptop= useMediaQuery({
        query: "(min-device-width:376px)"
    })

    
    useEffect(()=>{
        const interval= setInterval(()=>{
            setCompteur(compteur=>compteur-1);
        },1000);
        if(compteur===0){
            setIsCounting(false)
            var questions=nbQuestions+1
            setNbQuestions(questions)
            if(document.getElementById("Q1").innerHTML===filteredQues[numQues].reponse1){
                document.getElementById("Q1").style.background="#00FF00"
            }
            if(document.getElementById("Q2").innerHTML===filteredQues[numQues].reponse1){
                document.getElementById("Q2").style.background="#00FF00"
            }
            if(document.getElementById("Q3").innerHTML===filteredQues[numQues].reponse1){
                document.getElementById("Q3").style.background="#00FF00"
            }
            if(document.getElementById("Q4").innerHTML===filteredQues[numQues].reponse1){
                document.getElementById("Q4").style.background="#00FF00"
            }
            setCompteur("0")
            updateQues()
        }
        if(!isCounting){
            clearInterval(interval)
        }
    return()=>clearInterval(interval)})

    function question_aleatoire(max) {
        return Math.floor(Math.random() * max);
    }
    async function generate4Answers(question){
        var listAnswers
        if(filterQuestions===[]){
        } 
        else {listAnswers=[
            question.reponse1,
            question.reponse2,
            question.reponse3,
            question.reponse4,
            question.reponse5,
            question.reponse6,
            question.reponse7,
            question.reponse8,
            question.reponse9,
            question.reponse10
        ];
        setRightAnswer(listAnswers[0])
        var order_d=question_aleatoire(3);
        var order_a;
        var freeSlots=[0,1,2,3];
        var answers=[];
        answers[freeSlots[order_d]]=listAnswers[0];
        freeSlots=freeSlots.filter((element)=>{
            return element!==freeSlots[order_d]
        })
        listAnswers=listAnswers.filter((element)=>{
            return element!==listAnswers[0]
        })
        for (let i=0;i<3;i++){
            order_d=question_aleatoire(freeSlots.length);
            order_a=question_aleatoire(listAnswers.length);
            answers[freeSlots[order_d]]=listAnswers[order_a]
            freeSlots=freeSlots.filter((element)=>{
                return element!==freeSlots[order_d]
            })
            listAnswers=listAnswers.filter((element)=>{
                return element!==listAnswers[order_a]
            })
            
        }
        setAnswers(answers);
    }
}

    const fetchData= async()=>{
        let url_f="http://127.0.0.1:8000/api/questions"
        const response = await fetch(url_f);
        const data=await response.json();
        return data};

    const postData=async(data)=>{
        let url_p="http://127.0.0.1:8000/api/parties"
        const response= await fetch(url_p,{method:'post',headers:{'Content-Type': 'application/json'},body:JSON.stringify(data)})
        const responseData=await response.json();
        return responseData;
    }
    
    
    const filterQuestions= async(categorie)=>{
    if(fetched===0){
    await fetchData()
    .then(async(data)=>{        
        fetched=1;
        var filterQuestions=data.filter((question)=>{
            return question.categorie===categorie
        });
        setFilteredQues(filterQuestions);
        numQues=question_aleatoire(filteredQues.length)
    })
    .catch((error)=>{
        console.log(error)
    })
    };
    
    
};

useEffect(()=>{
filterQuestions(categorie.categorie);
setFilteredQues(filterQuestions(categorie.categorie));},[])

useEffect(()=>{
    if(filteredQues){
    generate4Answers(filteredQues[numQues]);
}},[filteredQues])




    function answerQues(){
        var copyUpdated=filteredQues.filter(question=>{return question.id !== filteredQues[numQues].id});
        return copyUpdated
    }
    function updateQues(event){
        setIsCounting(false); //arrête le compteur
        if( event &&event.target.innerHTML===filteredQues[numQues].reponse1){ //si clic sur une réponse et égalité entre la réponse et la réponse juste
            event.target.style.background="#00FF00"
            var justes=nbJustes+1
            setNbJustes(justes);
            var questions=nbQuestions+1
            setNbQuestions(questions)
            
        } //si la réponse choisie est la bonne, compteur de bonnes réponses+1
        if( event &&event.target.innerHTML!==filteredQues[numQues].reponse1){ //si clic sur une réponse et non égalité entre réponse et réponse juste
            event.target.style.background="#FF0000"
            if(document.getElementById("Q1").innerHTML===filteredQues[numQues].reponse1){
                document.getElementById("Q1").style.background="#00FF00"
            }
            else{
                document.getElementById("Q1").style.background="#FF0000"
            }
            if(document.getElementById("Q2").innerHTML===filteredQues[numQues].reponse1){
                document.getElementById("Q2").style.background="#00FF00"
            }
            else{
                document.getElementById("Q2").style.background="#FF0000"
            }
            if(document.getElementById("Q3").innerHTML===filteredQues[numQues].reponse1){
                document.getElementById("Q3").style.background="#00FF00"
            }
            else{
                document.getElementById("Q3").style.background="#FF0000"
            }
            if(document.getElementById("Q4").innerHTML===filteredQues[numQues].reponse1){
                document.getElementById("Q4").style.background="#00FF00"
            }
            else{
                document.getElementById("Q4").style.background="#FF0000"
            }
            var questions=nbQuestions+1
            setNbQuestions(questions)
        }
        
        var scoreData={
            idjoueur:user.id,
            score:nbJustes,
            categorie:categorie.categorie
            }
        setTimeout(()=>{
            
            document.getElementById("Q1").style.background="#e7e7e7"
            document.getElementById("Q2").style.background="#e7e7e7"
            document.getElementById("Q3").style.background="#e7e7e7"
            document.getElementById("Q4").style.background="#e7e7e7"        
            var updated=answerQues()
            setFilteredQues(updated)        
            numQues=question_aleatoire(updated.length)
        if(updated[0]){
            setIsCounting(true)                    
            setCompteur(20);}
        else{            
            postData(scoreData).then((response)=>{
                console.log("Data posted successfully",response)
            })
            window.location.assign('/score')
        }            
    },5000) 
    }
    
    


    return(
        <div>
            {isLaptop && <LaptopQuestionHeader compteur={compteur} juste={nbJustes} question={nbQuestions}></LaptopQuestionHeader>}
            {isMobileDevice && <MobileQuestionHeader compteur={compteur} juste={nbJustes} question={nbQuestions}></MobileQuestionHeader>}
            <div>{filteredQues[0]? filteredQues[numQues].question:null}</div>
            <br></br>
            {isLaptop &&<LaptopQuestionWrapper answer={answers} update={updateQues}>
                </LaptopQuestionWrapper>}
            {isMobileDevice &&<MobileQuestionWrapper answer={answers} update={updateQues}>
                </MobileQuestionWrapper>}
            
     
        </div>
    )    
}