import React from 'react';

export class AddRecipeForm extends React.Component {
	render() {
		return(
			<form action="#">
				<h1>Add Recipe</h1>
				<div>
					<label htmlFor="recipe-name">Recipe Name: </label>
					<input type="text" id="recipe-name" name="recipe_name" />
				</div>
				<div>
					<label htmlFor="ingredient-name">Ingredient: </label>
					<input type="text" id="ingredient-name" name="ingredient_name" />
					<button>Add</button>
				</div>
				<div>
					<ul>
						<li>Banana</li>
						<li>Salt</li>
						<li>Pepper</li>
					</ul>
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<textarea name="description" id="" cols="30" rows="10"></textarea>
				</div>
				<div>
					<button type="submit">Add Recipe</button>
				</div>
			</form>
		);
	}
}