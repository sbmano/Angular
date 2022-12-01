import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getbooks(){
    return [
      {
        name:'clean code',
        author:'robert c martin',
        image:'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
        amount:600,
      },
      {
        name:'Pragmatic Programmer',
        author:'David Thomas',
        image:'https://images-na.ssl-images-amazon.com/images/I/51yaxPX4BFL._SX360_BO1,204,203,200_.jpg',
        amount:800,
      },
      {
        name:'Art of computer programming',
        author:'Donald john fuller',
        image:'https://images-na.ssl-images-amazon.com/images/I/41YfMy-umUL._SX331_BO1,204,203,200_.jpg',
        amount:500,
      },
      {
        name:'introduction to algorithms',
        author:'cormen T',
        image:'https://images-na.ssl-images-amazon.com/images/I/41VndKVtiXL._SX442_BO1,204,203,200_.jpg',
        amount:900,
      },
    ];
  }
}
