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

			<li>
				<form>
					<input type="text" value={this.props.recipe.name} className="recipe-name" onChange={this.changeHandeler} />
					<ul>
						{
							this.props.recipe.ingr.map((item, i) => {
								return(
									<li key={`${item}_${i}`}>
										<input type="text" value={item} onChange={this.changeHandeler} />
									</li>
								);
							})
						}
					</ul>
					<textarea cols="30" rows="10" value={this.props.recipe.desc} onChange={this.changeHandeler}></textarea>
				</form>
			</li>
			/*<li>
				<h3>{this.props.recipe.name}</h3>
				<ul>
					{
						this.props.recipe.ingr.map((item, i) => <li key={`${item}_${i}`}>{item}</li>)
					}
				</ul>
				<div className="recipe-description">{this.props.recipe.desc}</div>
			</li>*/
		);
	}
}