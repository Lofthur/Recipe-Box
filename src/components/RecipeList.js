import React from 'react';
import { Recipe } from './Recipe';


export class RecipeList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ul>
				{
					Object.keys(this.props.recipes)
					.map(key =>  {
						return(
							<div key={key}>
								<Recipe recipe={this.props.recipes[key]} />
								<button onClick={() => this.props.removeRecipe(key)}>Remove</button>
								<button onClick={() => this.props.editForm(key)}>Edit</button>
							</div>
							
						)
					})
				}
			</ul>
		);
	}
}