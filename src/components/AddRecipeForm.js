import React from 'react';

export class AddRecipeForm extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			name: '',
			desc: '',
			ingr: []
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	handleClick(e) {

	}

	render() {

		return(
			<form>
				<h1>Add Recipe</h1>
				<div>
					<label htmlFor="name">Recipe Name: </label>
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
				</div>
				<div>
					<label htmlFor="ingr">Ingredient: </label>
					<input type="text" name="ingr" />
					<button>Add</button>
				</div>
				<div>
					<ul>
						<li>Banana</li>
						<li>Salt</li>
						<li>Pepper</li>
					</ul>
				</div>
				<div>
					<label htmlFor="desc">Description</label>
					<textarea name="desc" cols="30" rows="10" value={this.state.desc} onChange={this.handleChange}></textarea>
				</div>
				<div>
					<button type="button">Add Recipe</button>
				</div>
			</form>
		);
	}
}