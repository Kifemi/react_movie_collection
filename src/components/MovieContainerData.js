import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import '../styles/MovieData.css';
import Movie from '../classes/Movie';

export class MovieContainerData extends Component {
	IsInCollection = (owned) => {
		if(owned == 1) {
			return "Yes";
		} else{
			return "No";
		}
	}

	render() {
		var movie = new Movie();
		Object.assign(movie, this.props.movieData)
		return (
			<div className=''>
				<p className='dataTitle'>Movie title:</p>
				<p className='dataName'>{movie.name}</p>
				<p className='dataTitle'>Movie price:</p>
				<p className='dataName'>{parseFloat(movie.price).toFixed(2)} €</p>
				<p className='dataTitle'>Release date:</p>
				<p className='dataName'>{movie.yearPublished}</p>
				<p className='dataTitle'>Director:</p>
				<p className='dataName'>{movie.director}</p>
				<p className='dataTitle'>Is in the collection:</p>
				<p className='dataName'>{this.IsInCollection(movie.owned)}</p>
			</div>
		)
	}
}



export default MovieContainerData

