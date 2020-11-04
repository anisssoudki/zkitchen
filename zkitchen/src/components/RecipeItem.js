import React from 'react';
import LoveBtn from './LoveBtn'

const RecipeItem = ({recipe, onRecipeSelect}) => {


return (


    <div  className= "item">
           
        <div> <img className = "ui image" alt={recipe.display.displayName} src={recipe.display.images[0]}/></div>
        <LoveBtn recipe={ recipe.content.yums.count} />
        <strong> <h1>{recipe.display.displayName}</h1></strong> 
        
    
        
       <h3> <a  href={recipe.display.source.sourceRecipeUrl}> {recipe.display.displayName}  instructions </a> </h3>

      <h2>Ingredients:</h2>
         
     
            
        
           
         <div >{recipe.content.ingredientLines.map(ingredientLine => {
    
return <div className="left floated content">

    <div className= "item">
      <h3> 
          <table class="ui red table"> 
         
          <tbody>
         <tr >
              
                    {ingredientLine.ingredient}{"  "}
                    {ingredientLine.quantity}{" "}
                    {ingredientLine.unit}
            
         </tr>
      
            </tbody>
         </table>
          </h3> 
         </div>
        </div>

  
})}</div>
</div>

   
    
    
    
    )
}

export default RecipeItem;