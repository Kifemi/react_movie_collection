import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/MovieData.css';

export class MovieContainerData extends Component {
	render() {

		return (
			<div className=''>
				<p>{this.props.name}</p>
				<p>{this.props.year}</p>
				<p>{this.props.owned}</p>
			</div>
		)
	}
}

// PropTypes
MovieContainerData.propTypes = {
	name: PropTypes.object.isRequired,
	year: PropTypes.object.isRequired,
	owned: PropTypes.bool.isRequired,
}

export default MovieContainerData

