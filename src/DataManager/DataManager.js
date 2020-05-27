import Movie, { getPriceString } from '../classes/Movie';

export default class DataManager {
  constructor() {
		this.movieCollection = [];
	}
}


export function initDataManager(dataManager) {
	dataManager.movieCollection.push(new Movie('Jaws', 7.4990, 1975, "Steven Spielberg", false, "https://cdn.cdon.com/media-dynamic/images/product/movie/dvd/image4/jaws_nordic-20639703-frntl.jpg"));
	dataManager.movieCollection.push(new Movie('Once Upon a Time in the West', 8.99, 1968, "Sergio Leone", true, "https://i.pinimg.com/236x/eb/68/a6/eb68a65635ad80f426c365027e5d3526--sergio-leone-charles-bronson.jpg"));
	dataManager.movieCollection.push(new Movie("Schindler's List", 10, 1993, "Steven Spielberg", true, "https://upload.wikimedia.org/wikipedia/fi/3/38/Schindler%27s_List_movie.jpg"));
	
}

export function addMovieToCollection(dataManager, movie){
	dataManager.movieCollection.push(movie)
}
