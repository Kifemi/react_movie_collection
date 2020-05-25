import React, { Component } from 'react';

import movieContainerImage, { MovieContainerImage } from './MovieContainerImage';
import '../styles/MainWindow.css';
//import DataManager, { initDataManager } from '../DataManager/DataManager';

export class EditMovieForm extends Component {
  
  
  constructor(props) {
    super(props)

    //let movie = this.props.dataManager.movieCollection[0];
    let movie = null;

    if(movie != null) {
      this.state = {
        movieName: movie.name,
        moviePrice: movie.price,
        movieYearPublished: movie.yearPublished,
        movieDirector: movie.director,
        movieOwned: movie.owned,
        movieImageUrl: movie.imageUrl,
      };
    } else {
      this.state = {
        movieName: '',
        moviePrice: 0,
        movieYearPublished: 0,
        movieDirector: '',
        movieOwned: 'No',
        movieImageUrl: '',
      };
    }
  }
    
  handdleNameChange = event => {
    this.setState({
      movieName: event.target.value
    })
  }

  handdlePriceChange = event => {
    this.setState({
      moviePrice: event.target.value
    })
  }

  handdleYearChange = event => {
    this.setState({
      movieYearPublished: event.target.value
    })
  }

  handdleDirectorChange = event => {
    this.setState({
      movieDirector: event.target.value
    })
  }

  handdleUrlChange = event => {
    this.setState({
      movieImageUrl: event.target.value
    })
  }

  handleSubmit = event => {
    
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <MovieContainerImage imageUrl={this.state.movieImageUrl}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <p className='addMovieTexts'><label>Name</label></p>
            <p className='addMovieTexts'><label>Price</label></p>
            <p className='addMovieTexts'><label>Release year</label></p>
            <p className='addMovieTexts'><label>Director</label></p>
            <p className='addMovieTexts'><label>Is in the collection?</label></p>
            <p className='addMovieTexts'><label>Image Url</label></p>
          </div>
          <div className='col-6'>
            <form onSubmit={this.handleSubmit}>
              <div>
                <p className='addMovieTexts'><input type='text' value={this.state.movieName} 
                  onChange={this.handdleNameChange} /></p>
                <p className='addMovieTexts'><input type='decimal' value={this.state.moviePrice} 
                  onChange={this.handdlePriceChange}/></p>
                <p className='addMovieTexts'><input type='text' value={this.state.movieYearPublished} 
                  onChange={this.handdleYearChange}/></p>
                <p className='addMovieTexts'><input type='text' value={this.state.movieDirector} 
                  onChange={this.handdleDirectorChange}/></p>
                <p className='addMovieTexts'><select type='text' value={this.state.movieOwned} 
                  onChange={this.handdleDirectorChange}>
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
                </select></p>
                <p className='addMovieTexts'><input type='text' value={this.state.movieImageUrl} 
                  onChange={this.handdleUrlChange}/></p>
                <p><button type='submit'>Submit</button></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}

export default EditMovieForm
