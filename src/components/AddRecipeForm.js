import React from 'react';


export class AddRecipeForm extends React.Component {
	constructor(props) {
		super(props);

		this.changeIngrStr = this.changeIngrStr.bind(this);
		this.addIngredient = this.addIngredient.bind(this);
		this.createRecipe = this.createRecipe.bind(this);
		this.removeIngredient = this.removeIngredient.bind(this);

		this.state = {
			ingredientString: '',
			ingredientArr: []
		}
	}

	changeIngrStr(e) {
		this.setState({
			ingredientString: e.target.value
		});
	}

	addIngredient(ingredient) {
		const tempArr = [...this.state.ingredientArr];
		tempArr.push(ingredient);
		this.setState({
			ingredientArr: tempArr,
			ingredientString: ''
		});
	}

	removeIngredient(value) {
		const tempArr = [...this.state.ingredientArr];
		const index = tempArr.indexOf(value);
		tempArr.splice(index, 1);
		this.setState({
			ingredientArr: tempArr
		});
	}

	createRecipe(e) {
		e.preventDefault();
		const recipe = {
			name: this.name.value,
			desc: this.desc.value,
			ingr: this.state.ingredientArr,
		}	

		this.setState({
			ingredientArr: []
		});

		this.props.addRecipe(recipe);
		this.props.closeForm(e.target.dataset.key);
	}

	render() {		
		return(
			<div className="add-recipe">
				<div className="inner-recipe">
					<h3>Add Recipe</h3>
					<form onSubmit={this.createRecipe} data-key="add">
						<input ref={(input) => this.name = input} type="text" placeholder="Name" className="add-name" />
							<input value={this.state.ingredientString} onChange={this.changeIngrStr} type="text" placeholder="Ingredient" className="add-ingredient" />
							<button type="button" onClick={() => this.addIngredient(this.state.ingredientString)} className="add"><i className="fa fa-plus-circle fa-3x"></i></button>
						<ul className="add-ingredients">
							{this.state.ingredientArr.map((item, i) => {
								return <li key={`${item}_${i}`}>{item} <button type="button" onClick={() => this.removeIngredient(item)}><i className="fa fa-minus-circle"></i></button></li>
							})}
						</ul>
						<textarea ref={(input) => this.desc = input} cols="30" rows="10" placeholder="Description" className="add-description"></textarea>
						<button type="submit" className="add-button">Add Recipe</button>
					</form>	
				</div>
			</div>		
		);
	}
}