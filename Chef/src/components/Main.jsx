


import React from "react"

import RecipeSection  from "./Section"
import IngridientList from "./IngridientlList"
export default function Main(){


  let [Ingridient,SetIngridient]=React.useState([])

  let IngriNew=Ingridient.map((things)=><li key={things}>{things}</li>)
      
      
let[showRecipe,setshowRecipe]=React.useState(false)

function Show(){
   setshowRecipe(prevshowRecipe=> !prevshowRecipe) 
}
   function Submmit(formdata){
  
            let Newingridient=formdata.get("ingridient")
        if(!Ingridient.includes(Newingridient)){
      SetIngridient(prev=>[...prev,Newingridient])
        }
    console.log("Submmited!")
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
        
        
     

  <IngridientList length ={Ingridient.length} IngriNew={IngriNew}   Show={Show}/>

  <RecipeSection section={showRecipe} />
    
     </main>
}

    

