import React, { Component } from 'react';
import MovieContainerData from './MovieContainerData';
import MovieContainerImage from './MovieContainerImage';

export class MovieContainer extends Component {
	state = {
		showFull: false
	}

	//headerClicked = (this.state.showFull) => (!this.state.showFull)

	render() {
		const {name, yearPublished, owned, imageUrl} = this.props.movie;

		return (
			<div className='Container-fluid'>
				<div className='MovieContainerHeader'>
					<h1>{name}</h1>
				</div>
				<div onClick={this.headerClicked}>
					<MovieContainerData name={name} year={yearPublished} owned={owned} />
					<MovieContainerImage imageUrl={imageUrl} />
				</div>
			</div>
		)
	}
}

export default MovieContainer
