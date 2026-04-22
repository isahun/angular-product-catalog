import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookCard } from '../../components/book-card/book-card';

@Component({
  selector: 'app-book-list',
  imports: [BookCard,],
  templateUrl: './book-list.html'
})
export class BookList {
  private service = inject(BookService);
  books = this.service.getBooks();


}
