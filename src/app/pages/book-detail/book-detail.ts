import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookDetailCard } from '../../components/book-detail-card/book-detail-card';

@Component({
  selector: 'app-book-detail',
  imports: [BookDetailCard],
  templateUrl: './book-detail.html'
})
export class BookDetail {
  id = input.required<string>();

  private service = inject(BookService);
  private router  = inject(Router);

  book = computed(() => this.service.getBookById(this.id()));

  goBack(): void {
    this.router.navigate(['/books']);
  }
}
