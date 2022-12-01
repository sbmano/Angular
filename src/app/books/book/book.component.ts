import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import {  Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
@Input() book: Book={} as Book;
isincart:boolean=false;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
  }


  addtocart(){
    this.isincart=true;
    this.cartservice.add(this.book);
  }

  removefromcart(){
    this.isincart=false;
    this.cartservice.remove(this.book);
  }

}
