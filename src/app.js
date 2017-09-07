import React from 'react';
import { render } from 'react-dom';
import { RecipeBox } from './components/RecipeBox';

import style from './styles/app.sass';
import recipesData from './data/data.recipes';


console.log(recipesData);
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: {}
		}
	}

	componentDidMount() {
		this.setState({
			recipes: recipesData
		});
	}

	render() {
		return(
			<div>
				<RecipeBox recipes={this.state.recipes} />
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));