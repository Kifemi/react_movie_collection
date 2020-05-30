import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import '../styles/Image.css';

export class MovieContainerImage extends Component {
	render() {
		return (
			<div className=''>
				<img src={this.props.imageUrl} alt='' className={this.props.imageStyle}/>
			</div>
		)
	}
}



export default MovieContainerImage

