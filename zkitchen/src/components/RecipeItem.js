import React from 'react';

const RecipeItem = ({recipe}) => {


return (


    <div>
        <div> <img alt={recipe.display.displayName} src={recipe.display.images[0]}/></div>
       
       <strong> <h1>{recipe.display.displayName}</h1></strong>
<a  href={recipe.display.source.sourceRecipeUrl}> {recipe.display.displayName}  instructions</a>
        <h2> Ingredients:</h2>
<div>{recipe.content.ingredientLines.map(ingredientLine => {
    
return <div>
    
     {ingredientLine.ingredient} {ingredientLine.quantity} {ingredientLine.unit}
 
    
     </div>
  
})}</div>
    </div>
    
    
    
    )
}

export default RecipeItem;