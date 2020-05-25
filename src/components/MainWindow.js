import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MovieContainer from './MovieContainer';
import AboutContainer from '../components/pages/AboutContainer';
import SummaryContainer from '../components/pages/SummaryContainer';
import PropTypes from 'prop-types';
import '../styles/MainWindow.css';


export class MainWindow extends Component {
	render() {
		return (
			//<div className='container-fluid'>
			<Router>
				<div className='MainWindow'>
					<div className='row'> 
						<div className='col-12'>
							<Link className='routerLink' to='/'>Home</Link> | <Link
							className='routerLink' to='/about'>About</Link> | <Link
							className='routerLink' to='/summary'>Summary</Link>
						</div>
					</div>
					<Route exact path='/' render={ props => (
						<React.Fragment>
								<div className='row'>
									<div className='col-2'/>
									<div className='col-4 movieBox'>
										<MovieContainer movie={this.props.movieCollection[0]}/>	
									</div>
								</div>
								<div className='row'>
									<div className='col-2'/>
									<div className='col-4 movieBox'>
										<MovieContainer movie={this.props.movieCollection[1]}/>	
									</div>
								</div>
								<div className='row'>
									<div className='col-2'/>
									<div className='col-4 movieBox'>
										<MovieContainer movie={this.props.movieCollection[2]}/>	
									</div>
								</div>
							</React.Fragment>
						)}>
					</Route>
					<Route path='/about' component={AboutContainer} />
					<Route path='/summary' component={SummaryContainer} />
				</div>
			</Router>
		)
	}
}

// PropTypes
MainWindow.propTypes = {
	movieCollection: PropTypes.array.isRequired
}

export default MainWindow
