import React from 'react';



export class Recipe extends React.Component {
	render() {
		return(
			<li>
				<h3>{this.props.recipe.name}</h3>
				<ul>
					{
						this.props.recipe.ingr.map(item => <li key={item}>{item}</li>)
					}
				</ul>
				<div className="recipe-description">{this.props.recipe.desc}</div>
			</li>
		);
	}
}