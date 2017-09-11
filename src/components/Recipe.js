import React from 'react';



export class Recipe extends React.Component {
	render() {
		return(
			<li>
				<h3>{this.props.recipe.name}</h3>
				<h2>{this.props.recipe.key}</h2>
				<ul>
					{
						this.props.recipe.ingr.map((item, i) => <li key={`${item}_${i}`}>{item}</li>)
					}
				</ul>
				<div className="recipe-description">{this.props.recipe.desc}</div>
			</li>
		);
	}
}