import React from 'react';
import { Recipe } from './Recipe';


export class RecipeList extends React.Component {
	render() {
		return(
			<div>
				<h2>RecipeList</h2>
				<Recipe />
			</div>
		);
	}
}