import React, { Component } from 'react';
import MovieContainerData from './MovieContainerData';
import MovieContainerImage from './MovieContainerImage';
import PropTypes from 'prop-types';

export class MovieContainer extends Component {
	state = {
		showFull: true
	}

	headerClicked = () => {
		console.log('Hello World')
		this.setState({ shofull: false});
	}

	render() {
		const {name, yearPublished, owned, imageUrl} = this.props.movie;

		return (
			<div className='Container-fluid'>
				<div className='MovieContainerHeader' onClick={() => this.setState({ showFull: !this.state.showFull})}>
					<h1>{name}</h1>
				</div>
				{this.state.showFull ? 
					<div>
						<MovieContainerData name={name} year={yearPublished} owned={owned} />
						<MovieContainerImage imageUrl={imageUrl} />
					</div>
				: null}
			</div>
		)
	}
}

// PropTypes
MovieContainer.propTypes = {
	movie: PropTypes.object.isRequired
}

export default MovieContainer
