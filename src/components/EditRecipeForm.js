import React from 'react';

export class EditRecipeForm extends React.Component {
	constructor(props) {
		super(props);

		
		this.saveEdit = this.saveEdit.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this);
		this.changeHandeler = this.changeHandeler.bind(this);

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
				</form>
			</div>
		)
	}
}