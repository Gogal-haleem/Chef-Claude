import React from "react"
export default function Item(){

  let [array,setarray]=React.useState([])
      const allthings=["😁","👍","😍", "💕"]
      let NewAdding=array.map((thing)=>
          <p key={thing}>{thing}</p>)
   
   
        function AddNewString(){
           setarray(prevarray=> [...prevarray, allthings[prevarray.length]]  )
          }

   return<main>
    <h1 className="heading-item">Add item to empty Array</h1>
    <button onClick={AddNewString} className="addingString">Add item</button>
    <section className="Section1"
    aria-live="polite">
      {NewAdding}
    </section>
   </main>
}