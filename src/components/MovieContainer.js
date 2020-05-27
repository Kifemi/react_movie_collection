import React, { Component } from 'react';
import MovieContainerData from './MovieContainerData';
import MovieContainerImage from './MovieContainerImage';
//import PropTypes from 'prop-types';
import '../styles/MovieContainer.css';

export class MovieContainer extends Component {
	state = {
		showFull: true
	}

	headerClicked = () => {
		this.setState({showFull: !this.state.showFull})
	}

	render() {
		//let {name, price, yearPublished, director, owned, imageUrl} = this.props.movie;
		let {imageUrl} = this.props.movie;

		return (
			<div className='' onClick={this.headerClicked}>
				{this.state.showFull ? 
					<div>
						<div className='row' >
							<div className='col-12 movieHeader'>
								<p>{this.props.movie.name}</p>
							</div>
						</div>
						<div className='row'>
							<div className='col-1' />
							<div className='col-3 movieImage'>
								<MovieContainerImage imageUrl={imageUrl} />
							</div>
							<div className='col-7 movieData'>
								{/* <MovieContainerData name={name} price={price} year={yearPublished} director={director} owned={owned} /> */}
								<MovieContainerData movieData={this.props.movie} />
							</div>
							<div className='col-1 ' />
						</div>
					</div>
				:
				<div>
					<div className='row' >
						<div className='col-12 movieHeader'>
							<p>{this.props.movie.name} ({this.props.movie.yearPublished})</p>
						</div>
					</div>
				</div>
				}
			</div>	
		)
	}
}



export default MovieContainer
