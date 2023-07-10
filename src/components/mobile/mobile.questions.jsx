import React from 'react'
import './mobile.styles.css'
import Reponses from '../reponses'
export const MobileQuestionHeader = ({compteur,juste,question}) => {

    return (
        <div className="containerm">
            <div>Temps restant : {compteur}</div>
            <div>{juste}/{question}</div>
        </div>
    )
}

export const MobileQuestionWrapper=({answer,update})=>{
    return(
        <div className='gridcontainerm'>
            <Reponses choixReponse={update} reponse={answer[0]} idq="Q1" />
            <Reponses choixReponse={update} reponse={answer[1]} idq="Q2" />
            <Reponses choixReponse={update} reponse={answer[2]} idq="Q3"/>
            <Reponses choixReponse={update} reponse={answer[3]} idq="Q4"/>
        </div>
    )
}