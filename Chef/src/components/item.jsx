import React from "react"
import Head from  "./Head"
import Body from  "./Star"

export default function Item(){

const[userName,setUserName]=React.useState("Joe")

   return<section>
     <Head userName={userName}/>
     <Body userName={userName}/>
   </section>
   
    }

     
    
