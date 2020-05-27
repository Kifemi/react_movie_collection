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
		//this.CheckImage()
		addMovieToCollection(this.state.dataManager, movie)
		this.UpdateCollection()
		console.log((this.state.dataManager.movieCollection.length))
	}

	

	

	UpdateCollection = () => {
		this.setState({movieCollection: this.state.dataManager.movieCollection})
	}

	
	render() {
		return (
			//<div className='container-fluid'>
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
								<div className='row'>
									<div className='col-2'/>
									<div className='col-4 movieBox'>
										<MovieContainer movie={this.state.movieCollection[0]}/>	
									</div>
								</div>
								<div className='row'>
									<div className='col-2'/>
									<div className='col-4 movieBox'>
										<MovieContainer movie={this.state.movieCollection[1]}/>	
									</div>
								</div>
								<div className='row'>
									<div className='col-2'/>
									<div className='col-4 movieBox'>
										<MovieContainer movie={this.state.movieCollection[2]}/>	
									</div>
								</div>
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
