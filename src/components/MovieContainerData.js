import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/MovieData.css';
import Movie from '../classes/Movie';

export class MovieContainerData extends Component {
	

	

	render() {
		//let {name, price, yearPublished, director, owned} = this.props.movieData;
		//var movie = new Movie(name,price,yearPublished,director,owned,this.props.movieData.imageUrl);
		var movie = new Movie();
		Object.assign(movie, this.props.movieData)

		var IsInCollection = (owned) => {
			if(owned) {
				return "Yes";
			} else{
				return "No";
			}
		}

		return (
			<div className=''>
				<p className='dataTitle'>Movie title:</p>
				<p className='dataName'>{movie.name}</p>
				<p className='dataTitle'>Movie price:</p>
				<p className='dataName'>{movie.getPriceString()}</p>
				<p className='dataTitle'>Release date:</p>
				<p className='dataName'>{movie.yearPublished}</p>
				<p className='dataTitle'>Director:</p>
				<p className='dataName'>{movie.director}</p>
				<p className='dataTitle'>Is in the collection:</p>
				<p className='dataName'>{IsInCollection(movie.owned)}</p>
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

