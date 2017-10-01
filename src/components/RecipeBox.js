import React from 'react';
import { AddRecipe } from './AddRecipe';
import { RecipeList } from './RecipeList';
//set className in state
export class RecipeBox extends React.Component {
	render() {
		return (
				<div className={this.props.blur}>
					<div className="header-area">
						<h1>RECIPE BOX</h1>
						<AddRecipe openRecipe={this.props.openRecipe} />
					</div>
					<RecipeList recipes={this.props.recipes} removeRecipe={this.props.removeRecipe} editForm={this.props.editForm} />
				</div>
			);
	}
}