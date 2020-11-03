import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };
    
    onFormSubmit = (event) => {
    event.preventDefault();
        // todo make sure we callback from parent component
        this.props.onFormSubmit(this.state.term);
    }


    render() {
        return (

            <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui container">
                <div>
                    <h1><label>  Recipe Search  </label></h1>
                    <input 
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                </div>
            </form>
          </div>


        ) 
    }
}

export default SearchBar;