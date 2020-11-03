import React from 'react';
import SearchBar from './SearchBar'
import Yummly from '../apis/Yummly'
import RecipeList from './RecipeList'
import RecipeItem from './RecipeItem'

class App extends React.Component {

    state = { recipes: [] };

    onTermSubmit = async (term) => {
        
      const response =  await  Yummly.get("/search", {

            params: {
                q: term
            }

        });

        this.setState({ recipes: response.data.feed})
};

    render() {
        return (
             <div className="ui container">
                 <SearchBar onFormSubmit={this.onTermSubmit}/>
                 <RecipeList recipes={this.state.recipes}/>
       
             </div>
        )
    }
}

export default App;