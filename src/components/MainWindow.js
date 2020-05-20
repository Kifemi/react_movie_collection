import React, { Component } from 'react';
import '../styles/MainWindow.css';
import MovieContainer from './MovieContainer';
import PropTypes from 'prop-types';

export class MainWindow extends Component {
	render() {
		return (
			<div className='MainWindow'>
				<MovieContainer movie={this.props.movieCollection[0]}/>
				<MovieContainer movie={this.props.movieCollection[1]}/>
				<MovieContainer movie={this.props.movieCollection[2]}/>
			</div>
		)
	}
}

// PropTypes
MainWindow.propTypes = {
	movieCollection: PropTypes.array.isRequired
}

export default MainWindow
