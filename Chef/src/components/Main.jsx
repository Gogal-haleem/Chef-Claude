


import React from "react"



export default function Main(){


  let [Ingridient,SetIngridient]=React.useState(["Garlic","Chicken","Yougurt","Tomato","Onion"])

  let IngriNew=Ingridient.map((things)=><p key={things}>{things}</p>)
      
      

   function Submmit(event){
    event.preventDefault()
            let formdata= new FormData(event.currentTarget)
            let value=formdata.get("ingridient")
        if( !Ingridient.includes(value)){
      SetIngridient(prev=>[...prev,value])
        }
    console.log("Submmited!")
   }



    
   return <main>
        <form onSubmit={Submmit} className="add-ingridient-form">
            <input 
            type="text"
            placeholder="e.g Oregano"
            aria-label="Add ingrideint"
            name="ingridient"/>
            <button > + Add ingrideint</button>

        </form>
        <ul>
            {IngriNew}
        </ul>
         </main>
}

    

