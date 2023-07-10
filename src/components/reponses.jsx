export default function Reponses({reponse,choixReponse,idq}){
    return(
        <div>
            <button onClick={choixReponse} id={idq}>
                {reponse}
            </button>
        </div>
    )
}