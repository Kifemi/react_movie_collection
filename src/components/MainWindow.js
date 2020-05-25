import React, { Component } from 'react';
import '../styles/MainWindow.css';
import MovieContainer from './MovieContainer';
import PropTypes from 'prop-types';

export class MainWindow extends Component {
	render() {
		return (
			//<div className='container-fluid'>
				<div className='MainWindow'>
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
				</div>
			//</div>
		)
	}
}

// PropTypes
MainWindow.propTypes = {
	movieCollection: PropTypes.array.isRequired
}

export default MainWindow
