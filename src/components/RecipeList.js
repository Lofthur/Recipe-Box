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
					.map(key => <Recipe key={key} recipe={this.props.recipes[key]} />)
				}
			</ul>
		);
	}
}