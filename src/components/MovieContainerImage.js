import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Image.css';

export class MovieContainerImage extends Component {
	render() {
		return (
			<div>
				<img src={this.props.imageUrl} alt='' className='responsive'/>
			</div>
		)
	}
}

// PropTypes
MovieContainerImage.propTypes = {
	imageUrl: PropTypes.object.isRequired
}

export default MovieContainerImage

