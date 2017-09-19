import React from 'react';


export class AddRecipeForm extends React.Component {
	constructor(props) {
		super(props);

		this.changeIngrStr = this.changeIngrStr.bind(this);
		this.addIngredient = this.addIngredient.bind(this);
		this.createRecipe = this.createRecipe.bind(this);

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
			<form onSubmit={this.createRecipe} data-key="add">
				<input ref={(input) => this.name = input} type="text" placeholder="Name" />
				<div>
					<input value={this.state.ingredientString} onChange={this.changeIngrStr} type="text" placeholder="Ingredient" />
					<button type="button" onClick={() => this.addIngredient(this.state.ingredientString)}>Add</button>
				</div>
				<ul>
					{this.state.ingredientArr.map((item, i) => <li key={`${item}_${i}`}>{item}</li>)}
				</ul>
				<textarea ref={(input) => this.desc = input} cols="30" rows="10" placeholder="Description"></textarea>
				<button type="submit">Add Recipe</button>
			</form>			
		);
	}
}