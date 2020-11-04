import React from 'react';
import RecipeItem from './RecipeItem'


const RecipeList = ({recipes, onRecipeSelect}) => {
const renderedList = recipes.map(recipe => {

    return <RecipeItem onRecipeSelect={onRecipeSelect} recipe={recipe}/>;
});

return <div key={recipes.index} className="ui relaxed divided list">{renderedList}</div>
};

export default RecipeList;
