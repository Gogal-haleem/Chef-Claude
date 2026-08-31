import { HfInference } from '@huggingface/inference'

const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY)

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    
    try {
        // We use chatCompletion with explicit messages layout to bypass provider errors entirely
        const response=await hf.chatCompletion({
            model: "meta-llama/Llama-3.3-70B-Instruct",
            messages: [
                { role: "system", content: "You are Chef Claude, a professional culinary assistant. Take the user's ingredients list and provide a formatted recipe description with step-by-step instructions." },
                { role: "user", content: `I have these ingredients: ${ingredientsString}` }
            ],
            max_tokens: 500
        })
        
        // Target the precise nested text location returned by chatCompletion arrays
        return response.choices[0].message.content
    } catch (error) {
        console.error("Error generating recipe:", error)
        return "Chef Claude is hitting a network block. Please try pressing generate again."
    }
}