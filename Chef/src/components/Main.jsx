


import React from "react"

import { getRecipeFromChefClaude } from "../ai"






import RecipeSection  from "./Section"
import IngridientList from "./IngridientlList"
export default function Main(){


  let [Ingridient,SetIngridient]=React.useState([])

  let IngriNew=Ingridient.map((things)=><li key={things}>{things}</li>)
      
      
let[showRecipe,setshowRecipe]=React.useState(false)

const [recipe,setRecipe]=React.useState("")

   function Submmit(formdata){
  
            let Newingridient=formdata.get("ingridient")
        if(!Ingridient.includes(Newingridient)){
      SetIngridient(prev=>[...prev,Newingridient])
        }
    console.log("Submmited!")
   }

   async function handleClick() {
  
     setshowRecipe(prevshowRecipe=> !prevshowRecipe) 

const RecipeToCook= await getRecipeFromChefClaude(Ingridient)

setRecipe(RecipeToCook)

}


    
   return <main>
    
        <form action={Submmit} className="add-ingridient-form">
            <input 
            type="text"
            placeholder="e.g Oregano"
            aria-label="Add ingrideint"
            name="ingridient"/>
            <button > + Add ingrideint</button>

        </form>
        
        
     

  <IngridientList length ={Ingridient.length} IngriNew={IngriNew}   handleClick={handleClick}/>

  <RecipeSection section={showRecipe} recipe={recipe} />
    
     </main>
}

    

