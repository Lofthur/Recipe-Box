import React from 'react';

export class EditRecipeForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ingr: [],
			ingrStr: ''
		}

		this.onChange = this.onChange.bind(this);
		this.saveEdit = this.saveEdit.bind(this);
		const editKey = this.props.editKey;
	}

	saveEdit(e) {
		console.log(e.target.dataset.key);
		e.preventDefault();
		this.props.closeForm(e.target.dataset.key);
	}
	
//Må settes opp som AddRecipeForm fortsett med denne i morgen
	render() {

		return (
			<div>
				<h3>Edit Recipe</h3>
				<form onSubmit={this.saveEdit} data-key="edit">
					<input type="text" defaultValue={this.props.editRecipe.name} placeholder="Name" />
					<ul>
						{this.props.editRecipe.ingr.map((key, i) => <li key={`${key}_${i}`}>{key}</li>)}
					</ul>
					<button type="submit">Save</button>
				</form>
			</div>
		)
	}
}