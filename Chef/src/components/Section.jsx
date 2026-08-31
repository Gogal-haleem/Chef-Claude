import ReactMarkdown from "react-markdown"

export default function RecipeSection(props){
    return props.section && <section>
   
    <article className="suggested-recipe-container" aria-live="polite">
         <h2>Chef Claude Recommends:</h2>
        <p>Based on the ingredients you have available, I would recommend 
        this simple and delicious <strong>{}</strong> 
        recipe:</p>
       <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </article>
</section>
    }
