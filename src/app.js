import React from 'react';
import { render } from 'react-dom';

import style from './styles/app.sass';

class App extends React.Component {
	render() {
		return(
			<h1>It's me again</h1>
		);
	}
}

render(<App />, document.getElementById('root'));