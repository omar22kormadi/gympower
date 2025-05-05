export class Article {
  _id: string;
  nomArt: string;
  description: string;
  price: number;
  image: string;

  constructor(
    _id: string,
    nomArt: string,
    description: string,
    price: number,
    image: string
  ) {
    this._id = _id;
    this.nomArt = nomArt;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}