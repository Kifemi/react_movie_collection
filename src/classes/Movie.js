export default class Movie
{
	getPriceString() {
		//var price = parseFloat(this.price);
		var editedPrice = this.price.toFixed(2);
		return editedPrice;
	}

	constructor(name, price, yearPublished, director, owned, imageUrl) {
		this.name = name;
		this.price = price;
		this.yearPublished = yearPublished;
		this.director = director;
		this.owned = owned;
		this.imageUrl = imageUrl;
	}
}

// export function getPriceString() {
// 	var price = parseFloat(this.price);
// 	var editedPrice = price.toFixed(2);
// 	return editedPrice;
// }