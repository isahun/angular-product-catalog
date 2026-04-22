import { Component, inject } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookCard } from '../../components/book-card/book-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [BookCard,],
  templateUrl: './book-list.html'
})
export class BookList {
  private service = inject(BookService);
  private router = inject(Router);
  books = this.service.getBooks();

  goToDetail(id:string){
    this.router.navigate(['/books', id])
  }
}
