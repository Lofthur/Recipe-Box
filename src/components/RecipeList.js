import React from 'react';
import { Recipe } from './Recipe';


export class RecipeList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ul className="recipes-list">
				{
					Object.keys(this.props.recipes)
					.map(key =>  {
						return(
							<div key={key} className="recipe-container">
								<Recipe recipe={this.props.recipes[key]} />
								<span onClick={() => this.props.removeRecipe(key)}><i className="fa fa-minus-circle fa-lg"></i></span>
								<span onClick={() => this.props.editForm(key)}><i className="fa fa-pencil fa-lg"></i></span>
							</div>
							
						)
					})
				}
			</ul>
		);
	}
}