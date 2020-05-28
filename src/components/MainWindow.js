import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

//import DataManager, { initDataManager, addMovieToCollection} from '../DataManager/DataManager';
//import MovieContainer from './MovieContainer';
import AboutContainer from '../components/pages/AboutContainer';
import SummaryContainer from '../components/pages/SummaryContainer';
import AddMovieContainer from '../components/pages/AddMovieContainer';
import '../styles/MainWindow.css';
import MovieListContainer from './pages/MovieListContainer';


export class MainWindow extends Component {
	constructor(props) {
		super(props)
	
		// let dataManager = new DataManager();
		// initDataManager(dataManager);
	
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
		var addMovie = (props) => {
			return <AddMovieContainer movieKey={props.location.movieKey} dataManager={this.state.dataManager} AddMovieToCollection={this.AddMovieToCollection}/>
		}

		return (
			<Router>
				<div className='MainWindow'>
					<div className='row'> 
						<div className='col-12 links'>
							<NavLink className='routerLink' to='/react_movie_collection'>Home</NavLink> | <NavLink
							className='routerLink' to='/addmovie'>Add Movie</NavLink> | <NavLink
							className='routerLink' to='/summary'>Summary</NavLink> | <NavLink
							className='routerLink' to='/about'>About</NavLink>
						</div>
					</div>
					<Switch>
					<Route exact path='/react_movie_collection' render={ () => (
						<MovieListContainer movieList={this.state.movieCollection}/>
						)}>
					</Route>
					<Route path='/addmovie' component={addMovie}>
						{/* <AddMovieContainer movie={props.location.movie} AddMovieToCollection={this.AddMovieToCollection}/> */}
						{/* <AddMovieContainer dataManager={this.state.dataManager} AddMovieToCollection={this.AddMovieToCollection}/> */}
					</Route>
					<Route path='/about' component={AboutContainer} />
					<Route path='/summary' component={SummaryContainer} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default MainWindow
