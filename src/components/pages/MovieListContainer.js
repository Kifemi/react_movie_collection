import React, { Component } from 'react';
import MovieContainer from '../MovieContainer';
import '../../styles/MainWindow.css';

export class MovieListContainer extends Component {
  GetMovieList = () => this.props.movieList.map(element => {
    return (
      <div className='row' >
        <div className='col-2' />
        <div className='col-4 movieBox' >
          <MovieContainer movie={element} movieKey={element.id}/>
        </div>
      </div>
    )
  })

  render() {
    return (
      <div>
        {this.GetMovieList()}
      </div>
    )
  }
}

export default MovieListContainer
