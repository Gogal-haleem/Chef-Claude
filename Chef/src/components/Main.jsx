
<<<<<<< HEAD
export default function Main(props){

   const ingrideint=["chicken","Milk","Yougart","Garlic"]

   const IngridientItem=ingrideint.map((ingrideint)=>{
return <li key={ingrideint}>{ingrideint}</li>
   })

   function Submmit(){
    event.preventDefault()
    console.log("Submmited!")
   }
=======
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


>>>>>>> main
    
   return <main>
        <form onSubmit={Submmit} className="add-ingridient-form">
            <input 
            type="text"
            placeholder="e.g Oregano"
            aria-label="Add ingrideint"
            name="ingridient"/>
            <button > + Add ingrideint</button>
<<<<<<< HEAD
        </form>
        <ul>
            {IngridientItem}
        </ul>
=======
            </form>
             <ul>
            {IngriNew}
        </ul>
        
>>>>>>> main
         </main>
      

    

}