export class Article {
    id: number;
    nomArt: string;
    description: string;
    price: number;
    image: string;
  
    constructor(id: number, nomArt: string, description: string, price: number, image: string) {
      this.id = id;
      this.nomArt = nomArt;
      this.description = description;
      this.price = price;
      this.image = image;
    }
  }