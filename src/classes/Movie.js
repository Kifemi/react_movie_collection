export default class Movie
{
	constructor(id, name, price, yearPublished, director, owned, imageUrl) {
		this.id = id;
		this.name = name;
		this.price = parseFloat(price).toFixed(2);
		this.yearPublished = yearPublished;
		this.director = director;
		this.owned = owned;
		this.imageUrl = imageUrl;
	}
}