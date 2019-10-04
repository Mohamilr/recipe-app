import mongoose from 'mongoose';


const recipeSchema = mongoose.Schema({
    title : {type: String, required: true},
    ingredients: {type : String, required: true},
    instructions: {type : String, required: true},
    time : {type: Number, required: true},
    difficulty: {type: Number, required: true}
});

export default mongoose.model('recipe', recipeSchema);