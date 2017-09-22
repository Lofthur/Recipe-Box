import React from 'react';

export class EditRecipeForm extends React.Component {
	constructor(props) {
		super(props);

		
		this.saveEdit = this.saveEdit.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this);
		this.changeHandeler = this.changeHandeler.bind(this);
		this.addIngredient = this.addIngredient.bind(this);
		this.updateIngrString = this.updateIngrString.bind(this);
		this.updateHandler = this.updateHandler.bind(this);

		this.recipe = this.props.recipes[this.props.editKey];
		this.ingredients = this.recipe.ingr;

		this.state = {
			ingredientString: ''
		}

		console.log(this.recipe);
	}

	updateIngrString(e) {
		this.setState({
			ingredientString: e.target.value
		});
	}

	addIngredient(e, value) {
		this.ingredients.push(value);
		this.props.updateRecipe(this.props.editKey, this.updateHandler(e.target.name, this.ingredients));
	}

	removeIngredient(e, value) {
		const index = this.ingredients.indexOf(value);
		this.ingredients.splice(index, 1);
		this.props.updateRecipe(this.props.editKey, this.updateHandler(e.target.name, this.ingredients));
	}

	changeHandeler(e) {
		this.props.updateRecipe(this.props.editKey, this.updateHandler(e.target.name, e.target.value));
	}

	updateHandler(name, value) {
		const updateRecipe = {
			...this.recipe,
			[name]: value
		}

		return updateRecipe;
	}

	saveEdit(e) {
		e.preventDefault();
		this.props.closeForm(e.target.dataset.key);
	}
	
	render() {
		const recipe = this.props.recipes[this.props.editKey];
		
		return (
			<div>
				<h3>Edit Recipe</h3>
				<form onSubmit={this.saveEdit} data-key="edit">
					<input type="text" name="name" value={recipe.name} onChange={this.changeHandeler} />
					<input type="text" placeholder="Ingredient" value={this.state.ingredientString} onChange={this.updateIngrString} />
					<button type="button" name="ingr"onClick={(e) => this.addIngredient(e, this.state.ingredientString)}>Add</button>
					<ul>
						{this.ingredients.map((key, i) => {
							return (
								<li key={`${key}_${i}`}>
									{key}
									<button type="button" name="ingr" onClick={(e) => this.removeIngredient(e, key)}>-</button>
								</li>
							)
						})}
					</ul>
					<textarea name="desc" cols="30" rows="10" value={recipe.desc} onChange={this.changeHandeler}></textarea>
					<button type="submit">Save</button>
				</form>
			</div>
		)
	}
}