import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all books', () => {
    const books = service.getBooks();
    expect(books.length).toBeGreaterThan(0);
    expect(books[0]).toHaveProperty('id');
    expect(books[0]).toHaveProperty('title');
  });

  it('should find a book by id', () => {
    const book = service.getBookById('1');
    expect(book).toBeDefined();
    expect(book?.id).toBe('1');
  });

  it('should return undefined for unknown id', () => {
    const book = service.getBookById('999');
    expect(book).toBeUndefined();
  });
});
