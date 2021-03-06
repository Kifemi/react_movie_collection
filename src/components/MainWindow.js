import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import AboutContainer from '../components/pages/AboutContainer';
import SummaryContainer from '../components/pages/SummaryContainer';
import AddMovieContainer from '../components/pages/AddMovieContainer';
import '../styles/MainWindow.css';
import MovieListContainer from './pages/MovieListContainer';


export class MainWindow extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 dataManager: this.props.dataManager,
			 movieCollection: this.props.dataManager.movieCollection,
		};
	}

	AddMovieToCollection = (movie) => {
		this.state.dataManager.addMovieToCollection(movie)
		this.UpdateCollection()
	}

	UpdateCollection = () => {
		this.setState({movieCollection: this.state.dataManager.movieCollection})
	}
	
	render() {

		var movieList = (props) => {
			return <MovieListContainer movieList={this.state.movieCollection}/>
		}

		var addMovie = (props) => {
			return <AddMovieContainer movieKey={props.location.movieKey} dataManager={this.state.dataManager} AddMovieToCollection={this.AddMovieToCollection}/>
		}

		var summaryContainer = (props) => {
			return <SummaryContainer movieCollection={this.state.movieCollection} />
		}
		
		return (
			<Router>
				<div className='MainWindow container-fluid'>
					<div className='row'> 
						<div className='col-12 links'>
							<NavLink className='routerLink' to='/react_movie_collection'>Movie List</NavLink> | <NavLink
							className='routerLink' to='/react_movie_collection/addmovie'>Add Movie</NavLink> | <NavLink
							className='routerLink' to='/react_movie_collection/summary'>Summary</NavLink> | <NavLink
							className='routerLink' to='/react_movie_collection/about'>About</NavLink>
						</div>
					</div>
					<Switch>
						<Route exact path='/react_movie_collection' component={movieList}/>
						<Route path='/react_movie_collection/addmovie' component={addMovie}/>
						<Route path='/react_movie_collection/about' component={AboutContainer} />
						<Route path='/react_movie_collection/summary' component={summaryContainer} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default MainWindow
