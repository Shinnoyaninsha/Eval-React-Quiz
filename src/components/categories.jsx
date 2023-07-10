export default function Categorie({categorie,toQuestions}){  
      return(
        <div>
          <button onClick={toQuestions}>{categorie.categorie}</button>
        </div>
      )
      }