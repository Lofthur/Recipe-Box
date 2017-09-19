import React from 'react';

export class EditRecipeForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ingr: [...this.props.editRecipe.ingr],
			ingrStr: ''
		}

		this.saveEdit = this.saveEdit.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this);
		const editKey = this.props.editKey;
	}

	removeIngredient(value) {
		const tempArray = [...this.state.ingr];
		const index = tempArray.indexOf(value);
		tempArray.splice(index, 1);
		this.setState({
			ingr: tempArray
		});
		console.log(value);
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
						{this.state.ingr.map((key, i) => {
							return (
								<li key={`${key}_${i}`}>
									{key}
									<button type="button" onClick={() => this.removeIngredient(key)}>-</button>
								</li>
							)
						})}
					</ul>
					<button type="submit">Save</button>
				</form>
			</div>
		)
	}
}