import React, { Component } from 'react'

export class MovieContainerImage extends Component {
	render() {
		return (
			<div>
				<img src={this.props.imageUrl} alt='' />
			</div>
		)
	}
}

export default MovieContainerImage

