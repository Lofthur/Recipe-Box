import React from 'react';
import { render } from 'react-dom';
import { RecipeBox } from './components/RecipeBox';
import { AddRecipeForm } from './components/AddRecipeForm';
import { EditRecipeForm } from './components/EditRecipeForm';

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
		this.toEditForm = this.toEditForm.bind(this);
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

	toEditForm(key) {
		const recipe = this.state.recipes[key];
		console.log(recipe);
	}

	render() {
		return(
			<div>
				<button onClick={() => this.addRecipe()}>Test State</button>
				<RecipeBox recipes={this.state.recipes} removeRecipe={this.removeRecipe} toEditForm={this.toEditForm} />
				<AddRecipeForm addRecipe={this.addRecipe} />
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));