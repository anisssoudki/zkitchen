import React from 'react';
import RecipeItem from './RecipeItem'


const RecipeList = ({recipes}) => {
const renderedList = recipes.map(recipe => {

    return <RecipeItem recipe={recipe}/>;
});

return <div>{renderedList}</div>
};

export default RecipeList;
