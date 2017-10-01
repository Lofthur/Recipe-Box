import React from 'react';

export class AddRecipe extends React.Component {
	render() {
		return (
			<h2 onClick={this.props.openRecipe}><i className="fa fa-2x fa-plus-circle"></i></h2>
		);
	}
}