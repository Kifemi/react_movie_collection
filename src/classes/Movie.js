export default class Movie
{
	getPriceString() {
		return parseFloat(this.price).toFixed(2)
	}

	constructor(id, name, price, yearPublished, director, owned, imageUrl) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.yearPublished = yearPublished;
		this.director = director;
		this.owned = owned;
		this.imageUrl = imageUrl;
	}
}