import Movie from '../classes/Movie';

var movieCollection = [];


function initDataManager() {
	movieCollection.push(new Movie(1,'Jaws', 7.4990, 1975, "Steven Spielberg", 0, "https://cdn.cdon.com/media-dynamic/images/product/movie/dvd/image4/jaws_nordic-20639703-frntl.jpg"));
	movieCollection.push(new Movie(2,'Once Upon a Time in the West', 8.99, 1968, "Sergio Leone", 1, "https://i.pinimg.com/236x/eb/68/a6/eb68a65635ad80f426c365027e5d3526--sergio-leone-charles-bronson.jpg"));
	movieCollection.push(new Movie(3,"Schindler's List", 10, 1993, "Steven Spielberg", 0, "https://upload.wikimedia.org/wikipedia/fi/3/38/Schindler%27s_List_movie.jpg"));	
}

function addMovieToCollection(movie){
	if(!movie.id){
		movie.id = movieCollection.length + 1;
		movieCollection.push(movie)
		alert('Movie was added to the list')
	} else {
		var index = movieCollection.findIndex(element => element.id === movie.id)
		if(index !== null) {
			movieCollection.splice(index, 1, movie)
			//movieCollection[index] = movie
			alert('Movie was edited')
		}
	}
}

export default {movieCollection, initDataManager, addMovieToCollection}
