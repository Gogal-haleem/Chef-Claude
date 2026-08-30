
export default function RecipeSection(props){
    return props.section && <section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend 
        this simple and delicious <strong>{}</strong> 
        recipe:</p>
        {props.recipe}
    </article>
</section>
    }
