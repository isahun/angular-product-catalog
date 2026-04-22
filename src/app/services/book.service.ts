import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { BOOKS } from '../data/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  getBooks(): Book[] {
    return BOOKS;
  }

  getBooksById(id: string): Book | undefined {
    return BOOKS.find(b => b.id === id);
  }
}
