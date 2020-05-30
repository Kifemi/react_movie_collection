import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import MovieContainerData from './MovieContainerData';
import MovieContainerImage from './MovieContainerImage';
import '../styles/MovieContainer.css';
import '../styles/Image.css';

export class MovieContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showFull: true,
			movie: this.props.movie,
			movieKey: this.props.movieKey,
		};
	}

	headerClicked = () => {
		this.setState({showFull: !this.state.showFull})
	}

	render() {
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
							<div className='col-3'>
								<MovieContainerImage imageUrl={imageUrl} imageStyle={"imageCover"} />
							</div>
							<div className='col-7 movieData'>
								<MovieContainerData movieData={this.props.movie} />
							</div>
							<div className='col-1 ' />
						</div>
						<div className='row justify-content-end'>
							<div>
								<NavLink to={{pathname:'/react_movie_collection/addmovie', movie:this.props.movie, movieKey:this.props.movie.id}}>
									<button className='button'>
										Edit
									</button>
								</NavLink>
							</div>
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
