import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '../../services/book.service';
import { provideRouter } from '@angular/router';
import { BookList } from './book-list';
import { Book } from '../../interfaces/book';

describe('BookList', () => {
  let component: BookList;
  let fixture: ComponentFixture<BookList>;

  const mockBooks: Book[] = [
    {
    id: '1',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 25,
    image:
      'https://picsum.photos/id/28/200/300',
    category: 'Fantasy',
  },
  {
    id: '2',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 25,
    image:
      'https://picsum.photos/id/28/200/300',
    category: 'Fantasy',
  }
  ];

  const mockBookService = {
    getBooks: () => mockBooks,
    getBooksByID: (id:string) => mockBooks.find(b => b.id === id)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookList],
      providers: [
        provideRouter([]),
        { provide: BookService, useValue: mockBookService }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(BookList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load books from the service', () => {
    expect(component.books.length).toBe(2);
  });
});
