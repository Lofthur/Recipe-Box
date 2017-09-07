import React from 'react';
import { AddRecipe } from './AddRecipe';
import { RecipeList } from './RecipeList';
import { AddRecipeForm } from './AddRecipeForm';


export class RecipeBox extends React.Component {
	render() {
		return (
				<div>
					<div className="header-area">
						<h1>Recipe Box</h1>
						<AddRecipe addRecipeClick={this.props.addRecipeClick} />
					</div>
					<RecipeList recipes={this.props.recipes}/>
					<AddRecipeForm />
				</div>
			);
	}
}