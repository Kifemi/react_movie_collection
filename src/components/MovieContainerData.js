import React, { Component } from 'react'

export class MovieContainerData extends Component {
	render() {

		return (
			<div>
				<p>{this.props.name}</p>
				<p>{this.props.year}</p>
				<p>{this.props.owned}</p>
			</div>
		)
	}
}

export default MovieContainerData

