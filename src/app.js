import React from 'react';
import { render } from 'react-dom';
import { RecipeBox } from './components/RecipeBox';
import { AddRecipeForm } from './components/AddRecipeForm';
import { EditRecipeForm } from './components/EditRecipeForm';

import style from './styles/app.sass';
import recipesData from './data/data.recipes';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: {},
			editRecipe: {},
			editKey: '',
			showEditForm: false,
			showAddRecipeForm: false
		}

		this.addRecipe = this.addRecipe.bind(this);
		this.removeRecipe = this.removeRecipe.bind(this);
		this.editForm = this.editForm.bind(this);
		this.updateEdit = this.updateEdit.bind(this);
		this.closeForm = this.closeForm.bind(this);
		this.addRecipeForm = this.addRecipeForm.bind(this);
		this.openRecipe = this.openRecipe.bind(this);
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

	addRecipeForm() {
		return <AddRecipeForm addRecipe={this.addRecipe} closeForm={this.closeForm} />
	}

	editForm(key) {
		const recipeKey = key;
		const recipes = {...this.state.recipes};
		const recipe = recipes[key];
		this.setState({
			editRecipe: recipe,
			editKey: recipeKey,
			showEditForm: true
		});
	}

	updateEdit() {
		return <EditRecipeForm editRecipe={this.state.editRecipe} editKey={this.state.editKey} closeForm={this.closeForm} />
	}

	openRecipe() {
		this.setState({
			showAddRecipeForm: true
		});
	}

	closeForm(key) {
		console.log(key);
		if(key == 'edit') {
			this.setState({
				showEditForm: false
			});
		} else if(key == 'add') {
			this.setState({
				showAddRecipeForm: false
			});
		}
		
	}

	render() {
		return(
			<div>
				<button onClick={() => this.addRecipe()}>Test State</button>
				<RecipeBox recipes={this.state.recipes} removeRecipe={this.removeRecipe} editForm={this.editForm}  openRecipe={this.openRecipe} />
				{ this.state.showAddRecipeForm ? this.addRecipeForm() : null }
				{ this.state.showEditForm ? this.updateEdit() : null }
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));