import React, { Component } from 'react';
import EditMovieForm from '../EditMovieForm';

export class AddMovieContainer extends Component {
  render() {
    return (
      <div>
        <EditMovieForm dataManager={this.props.dataManager}/>
      </div>
    )
  }
}

export default AddMovieContainer
