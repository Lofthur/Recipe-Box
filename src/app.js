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
			showAddRecipeForm: false,
			blurEffect: '',
		}

		this.addRecipe = this.addRecipe.bind(this);
		this.removeRecipe = this.removeRecipe.bind(this);
		this.editForm = this.editForm.bind(this);
		this.updateEdit = this.updateEdit.bind(this);
		this.closeForm = this.closeForm.bind(this);
		this.addRecipeForm = this.addRecipeForm.bind(this);
		this.openRecipe = this.openRecipe.bind(this);
		this.updateRecipe = this.updateRecipe.bind(this);
		this.updateIngredient = this.updateIngredient.bind(this);
	}

	componentDidMount() {
		const localStorageRef = localStorage.getItem('lo-recipe-box');

		if(localStorageRef) {
			this.setState({
				recipes: JSON.parse(localStorageRef)
			});
		} else {
			this.setState({
				recipes: recipesData
			});
		}
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('Something Changed');
		localStorage.setItem('lo-recipe-box', JSON.stringify(nextState.recipes));
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
		this.setState({
			editKey: key,
			showEditForm: true
		});
		this.setState({
			blurEffect: 'blur'
		})
	}

	updateRecipe(key, updatedRecipe) {
		const recipes = {...this.state.recipes};
		recipes[key] = updatedRecipe;
		this.setState({ recipes });
	}

	updateIngredient(key, updatedRecipe) {
		const recipes = {...this.state.recipes};
		recipes[key] = updatedRecipe;
		this.setState({ recipes });
	}
 
	updateEdit() {
		return <EditRecipeForm 
			editKey={this.state.editKey} 
			recipes={this.state.recipes} 
			updateRecipe={this.updateRecipe} 
			closeForm={this.closeForm} 
			updateIngredient={this.updateIngredient} 
			/>
	}

	openRecipe() {
		this.setState({
			showAddRecipeForm: true,
			blurEffect: 'blur'
		});
	}

	closeForm(key) {
		if(key == 'edit') {
			this.setState({
				showEditForm: false,
				editKey: ''
			});
		} else if(key == 'add') {
			this.setState({
				showAddRecipeForm: false
			});
		}
		this.setState({
			blurEffect: ''
		});
	}

	render() {
		return(
			<div className="container">
				<RecipeBox recipes={this.state.recipes} removeRecipe={this.removeRecipe} editForm={this.editForm}  openRecipe={this.openRecipe} blur={this.state.blurEffect}/>
				{ this.state.showAddRecipeForm ? this.addRecipeForm() : null }
				{ this.state.showEditForm ? this.updateEdit() : null }
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));