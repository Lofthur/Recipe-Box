import React from 'react';

export class AddRecipe extends React.Component {
	render() {
		return (
			<h2 onClick={this.props.openRecipe}>Add Recipes</h2>
		);
	}
}