import { Component, input } from '@angular/core';
import { Book } from '../../interfaces/book';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-book-detail-card',
  imports: [CurrencyPipe],
  templateUrl: './book-detail-card.html'
})
export class BookDetailCard {
  book = input.required<Book>();
}
