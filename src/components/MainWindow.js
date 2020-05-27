import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import DataManager, { initDataManager, addMovieToCollection} from '../DataManager/DataManager';
import MovieContainer from './MovieContainer';
import AboutContainer from '../components/pages/AboutContainer';
import SummaryContainer from '../components/pages/SummaryContainer';
import AddMovieContainer from '../components/pages/AddMovieContainer';
//import EditMovieForm from '../components/EditMovieForm';
//import PropTypes from 'prop-types';
import '../styles/MainWindow.css';
import MovieListContainer from './pages/MovieListContainer';
//import Movie from '../classes/Movie';


export class MainWindow extends Component {
	constructor(props) {
		super(props)
	
		let dataManager = new DataManager();
		initDataManager(dataManager);
	
		this.state = {
			 dataManager: dataManager,
			 movieCollection: dataManager.movieCollection,
		};
	}

	AddMovieToCollection = (movie) => {
		console.log("Adding movie to Collection")
		addMovieToCollection(this.state.dataManager, movie)
		this.UpdateCollection()
		console.log((this.state.dataManager.movieCollection.length))
	}

	

	

	UpdateCollection = () => {
		this.setState({movieCollection: this.state.dataManager.movieCollection})
	}

	
	render() {
		return (
			<Router>
				<div className='MainWindow'>
					<div className='row'> 
						<div className='col-12'>
							<Link className='routerLink' to='/'>Home</Link> | <Link
							className='routerLink' to='/addmovie'>Add Movie</Link> | <Link
							className='routerLink' to='/about'>About</Link> | <Link
							className='routerLink' to='/summary'>Summary</Link>
						</div>
					</div>
					<Route exact path='/' render={ props => (
						<React.Fragment>
							<MovieListContainer movieList={this.state.movieCollection}/>
						</React.Fragment>
						)}>
					</Route>
					<Route path='/addmovie'>
						<AddMovieContainer dataManager={this.state.dataManager} AddMovieToCollection={this.AddMovieToCollection}/>
					</Route>
					<Route path='/about' component={AboutContainer} />
					<Route path='/summary' component={SummaryContainer} />
				</div>
			</Router>
		)
	}
}

export default MainWindow
