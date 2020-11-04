import React from 'react';
import SearchBar from './SearchBar'
import Yummly from '../apis/Yummly'
import RecipeList from './RecipeList'


class App extends React.Component {

    state = { recipes: [], LovedRecipe: null};

    onTermSubmit = async (term) => {
        
      const response =  await  Yummly.get("/search", {

            params: {
                q: term
            }

        });

        this.setState({ recipes: response.data.feed})
        
};

onRecipeSelect = (recipe) => {console.log(recipe)}

    render() {
        return (
             <div className="ui container">
                 <SearchBar onFormSubmit={this.onTermSubmit}/>
                 <RecipeList  onRecipeSelect={this.onRecipeSelect} recipes={this.state.recipes}/>
            
             </div>
        )
    }
}

export default App;