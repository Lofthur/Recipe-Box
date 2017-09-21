import React from 'react';

export class EditRecipeForm extends React.Component {
	constructor(props) {
		super(props);

		
		this.saveEdit = this.saveEdit.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this);
		this.changeHandeler = this.changeHandeler.bind(this);
		this.addIngredient = this.addIngredient.bind(this);
		this.updateIngrString = this.updateIngrString.bind(this);

		this.state = {
			ingredientString: ''
		}
	}

	updateIngrString(e) {
		this.setState({
			ingredientString: e.target.value
		});

		console.log(`e: ${e.target.value}`);
		console.log(this.state.ingredientString);
	}

	addIngredient(e, value) {
		const recipe = this.props.recipes[this.props.editKey];
		const ingredients = recipe.ingr;
		ingredients.push(value);
		const updateRecipe = {
			...recipe,
			[e.target.name]: ingredients
		}

		this.props.updateRecipe(this.props.editKey, updateRecipe);
	}

	removeIngredient(e, value) {
		const recipe = this.props.recipes[this.props.editKey];
		const ingredients = recipe.ingr;
		const index = ingredients.indexOf(value);
		ingredients.splice(index, 1);
		const updateRecipe = {
			...recipe,
			[e.target.name]: ingredients
		}
		this.props.updateRecipe(this.props.editKey, updateRecipe);
	}

	changeHandeler(e) {
		const recipe = this.props.recipes[this.props.editKey];
		const updateRecipe = {
			...recipe,
			[e.target.name] : e.target.value
		};
		this.props.updateRecipe(this.props.editKey, updateRecipe);
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
						{recipe.ingr.map((key, i) => {
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
					<button type="button">Cancel</button>
				</form>
			</div>
		)
	}
}