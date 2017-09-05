import React from 'react';
import { render } from 'react-dom';
import { RecipeBox } from './components/RecipeBox';

import style from './styles/app.sass';

class App extends React.Component {
	render() {
		return(
			<RecipeBox />
		);
	}
}

render(<App />, document.getElementById('root'));