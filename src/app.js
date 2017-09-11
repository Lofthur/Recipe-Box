import React from 'react';
import { render } from 'react-dom';
import { RecipeBox } from './components/RecipeBox';
import { AddRecipeForm } from './components/AddRecipeForm';

import style from './styles/app.sass';
import recipesData from './data/data.recipes';


console.log(recipesData);
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: {}
		}

		this.addRecipe = this.addRecipe.bind(this);
	}

	componentDidMount() {
		this.setState({
			recipes: recipesData
		});
	}

	addRecipe(recipe) {
		const tempState = {...this.state.recipes};
		const timeStamp = Date.now();
		tempState[`recipe-${timeStamp}`] = recipe;
		this.setState({
			recipes: tempState
		});
	}


	render() {
		return(
			<div>
				<button onClick={() => this.addRecipe()}>Test State</button>
				<RecipeBox recipes={this.state.recipes} />
				<AddRecipeForm addRecipe={this.addRecipe}/>
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));