import React, { Component } from 'react';
import MovieContainerData from './MovieContainerData';
import MovieContainerImage from './MovieContainerImage';
import PropTypes from 'prop-types';
import '../styles/MovieContainer.css';

export class MovieContainer extends Component {
	state = {
		showFull: true
	}

	headerClicked = () => {
		this.setState({showFull: !this.state.showFull})
	}

	render() {
		const {name, yearPublished, owned, imageUrl} = this.props.movie;

		return (
			<div className=''>
				<div className='row' onClick={this.headerClicked}>
					<div className='col-12 movieHeader'>
						<p>{name}</p>
					</div>
				</div>
				{this.state.showFull ? 
					<div className='row'>
						<div className='col-1 movieHeader' />
						<div className='col-4'>
							<MovieContainerImage imageUrl={imageUrl} />
						</div>
						<div className='col-4'>
							<MovieContainerData name={name} year={yearPublished} owned={owned} />
						</div>
						<div className='col-1 movieHeader' />
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
