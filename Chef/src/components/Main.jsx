
export default function Main(props){

   const ingrideint=["chicken","Milk","Yougart","Garlic"]

   const IngridientItem=ingrideint.map((ingrideint)=>{
return <li key={ingrideint}>{ingrideint}</li>
   })

   function Submmit(){
    event.preventDefault()
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
            {IngridientItem}
        </ul>
         </main>
      

    

}