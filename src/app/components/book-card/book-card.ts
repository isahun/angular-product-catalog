import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../interfaces/book';
@Component({
  selector: 'app-book-card',
  imports: [RouterLink],
  templateUrl: './book-card.html'
})
export class BookCard {
  book = input.required<Book>();
  ifSelected = output<string>();

  notificar() {
    this.ifSelected.emit(this.book().id);
  }
}
