import React from 'react';



export class Recipe extends React.Component {
	constructor(props) {
		super(props);

		this.changeHandeler = this.changeHandeler.bind(this);
	}

	changeHandeler(e) {

	}

	render() {
		return(
			<li className="recipe">
				<h3>{this.props.recipe.name}</h3>
				<div className="recipe-description">
					<ul>
						{
							this.props.recipe.ingr.map((item, i) => <li key={`${item}_${i}`}>{item}</li>)
						}
					</ul>
					<div>{this.props.recipe.desc}</div>
				</div>
			</li>
		);
	}
}