import React from 'react'
import './laptop.styles.css'
import Reponses from '../reponses'
export const LaptopQuestionHeader = ({compteur,juste,question}) => {

    return (
        <div className="flexl">
            <div>Temps restant : {compteur}</div>
            <div>Score : {juste}/{question}</div>
        </div>
    )
}

export const LaptopQuestionWrapper=({answer,update})=>{
    return(
        <div className='gridcontainerl'>
            <Reponses choixReponse={update} reponse={answer[0]} idq="Q1" />
            <Reponses choixReponse={update} reponse={answer[1]} idq="Q2" />
            <Reponses choixReponse={update} reponse={answer[2]} idq="Q3"/>
            <Reponses choixReponse={update} reponse={answer[3]} idq="Q4"/>
        </div>
    )
}