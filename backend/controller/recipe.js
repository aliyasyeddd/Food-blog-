const getRecipes=async(req,res)=>{
    res.json({message:"Get all recipes"})
}

const getRecipe=async(req,res)=>{
    res.json({message:"Get recipe by id"})
}

const addRecipe = async(req,res)=>{
    res.json({message:"Add recipe"})
}

const editRecipe = async(req,res)=>{
    res.json({message:"Edit recipe"})
}

const deleteRecipe = async(req,res)=>{
    res.json({message:"Delete recipe"})
}



module.exports = {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}

