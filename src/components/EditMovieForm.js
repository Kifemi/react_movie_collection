import React, { Component } from 'react';

import Movie from '../classes/Movie';
import MovieContainerImage from './MovieContainerImage';
import '../styles/MainWindow.css';
import '../styles/MovieContainer.css';

export class EditMovieForm extends Component {
  
  
  constructor(props) {
    super(props)

    var index = this.props.dataManager.movieCollection.findIndex(element => element.id === this.props.movieKey)
    var movie = this.props.dataManager.movieCollection[index]

    if(movie != null) {
      this.state = {
        movieId: movie.id,
        movieName: movie.name,
        moviePrice: parseFloat(movie.price).toFixed(2),
        movieYearPublished: movie.yearPublished,
        movieDirector: movie.director,
        movieOwned: movie.owned,
        movieImageUrl: movie.imageUrl,
      };
    } else {
      this.state = {
        movieId: '',
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

  handdleOwnedChange = event => {
    this.setState({
      movieOwned: event.target.value
    })
  }

  handdleUrlChange = event => {
    this.setState({
      movieImageUrl: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    
    this.CheckImage(this.state.movieImageUrl)
  }

  CheckImage = (imageUrl) => {
		var image = new Image()
		image.src = imageUrl;
		image.onload = () => {
			this.CheckMovieData()
		} 
		image.onerror = () => {
			alert('Image not valid')
		}
	}

  CheckMovieData = () => {
    var id = this.state.movieId
    var name = this.state.movieName
    var price = this.state.moviePrice
    var yearPublished = this.state.movieYearPublished
    var director = this.state.movieDirector
    var owned = this.state.movieOwned
    var imageUrl = this.state.movieImageUrl
    console.log(name)
    if(!id) {id=null}
    if(!name) 
    {
      alert('Please, give movie title')  
      return;
    }
		if(!price) {price = 0.0}
		if(!director) {director = "Movie has no director"}
    if(owned === null) {owned = false}
    if(!yearPublished) {yearPublished = 0}
    
    let newMovie = new Movie(id, name, price, yearPublished, director, owned, imageUrl)
    this.props.AddMovieToCollection(newMovie)
  }
  
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-4 center'>
            <MovieContainerImage imageUrl={this.state.movieImageUrl}/>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col addMovieTexts'><label>Name</label></div>
            <div className='col addMovieTexts'><input type='text' value={this.state.movieName} 
              onChange={this.handdleNameChange} /></div>
          </div>
          <div className='row'>
            <div className='col addMovieTexts'><label>Price</label></div>
            <div className='col addMovieTexts'><input type='decimal' value={this.state.moviePrice} 
              onChange={this.handdlePriceChange}/></div>
          </div>
          <div className='row'>
            <div className='col addMovieTexts'><label>Release year</label></div>
            <div className='col addMovieTexts'><input type='text' value={this.state.movieYearPublished} 
                onChange={this.handdleYearChange}/></div>
          </div>
          <div className='row'>
            <div className='col addMovieTexts'><label>Director</label></div>
            <div className='col addMovieTexts'><input type='text' value={this.state.movieDirector} 
                onChange={this.handdleDirectorChange}/></div>
          </div>
          <div className='row'>
            <div className='col addMovieTexts'><label>Is in the collection?</label></div>
            <div className='col addMovieTexts'>
              <select value={this.state.movieOwned} 
                      onChange={this.handdleOwnedChange}>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col addMovieTexts'><label>Image Url</label></div>
            <div className='col addMovieTexts'><input type='text' value={this.state.movieImageUrl} 
                onChange={this.handdleUrlChange}/></div>
          </div>
          <div>
            <button className='button' type='submit'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditMovieForm
