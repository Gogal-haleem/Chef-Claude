export default function IngridientList(props){
        return props.length !==0?(
         <section >
           <h1 className="Ingredients-h1">Ingredients on hand:</h1>
           <ul className="Main-ul">
            {props.IngriNew}
        </ul>
        { props.length >3 &&
           <div className="Get-recipe">
            <h3>Ready for a recipe ?</h3>
            <p >Generate a recipe from your list of ingrideints</p>
            <button onClick={()=>props.Show()}className="Button-1">Get a recipe</button>
           </div>
}
         </section>)
:null}
