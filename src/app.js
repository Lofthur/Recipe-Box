import React from 'react';
import { render } from 'react-dom';
import { RecipeBox } from './components/RecipeBox';
import { AddRecipeForm } from './components/AddRecipeForm';

import style from './styles/app.sass';
import recipesData from './data/data.recipes';


console.log(recipesData);
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: {}
		}

		this.addRecipe = this.addRecipe.bind(this);
		this.removeRecipe = this.removeRecipe.bind(this);
	}

	componentDidMount() {
		this.setState({
			recipes: recipesData
		});
	}

	addRecipe(recipe) {
		const recipes = {...this.state.recipes};
		const timeStamp = Date.now();
		recipes[`recipe-${timeStamp}`] = recipe;
		this.setState({
			recipes: recipes
		});
	}

	removeRecipe(key) {
		const recipes = {...this.state.recipes};
		delete recipes[key];
		this.setState({
			recipes: recipes
		});

	}

	render() {
		return(
			<div>
				<button onClick={() => this.addRecipe()}>Test State</button>
				<RecipeBox recipes={this.state.recipes} removeRecipe={this.removeRecipe} />
				<AddRecipeForm addRecipe={this.addRecipe}/>
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));