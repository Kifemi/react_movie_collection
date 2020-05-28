import React, { Component } from 'react';
import EditMovieForm from '../EditMovieForm';

export class AddMovieContainer extends Component {
  render() {
    return (
      <div>
        <EditMovieForm movieKey={this.props.movieKey} dataManager={this.props.dataManager} AddMovieToCollection={this.props.AddMovieToCollection}/>
      </div>
    )
  }
}

export default AddMovieContainer
