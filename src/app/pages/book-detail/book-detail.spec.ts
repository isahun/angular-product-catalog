import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookDetail } from './book-detail';
import { Book } from '../../interfaces/book';

describe('BookDetail', () => {
  let component: BookDetail;
  let fixture: ComponentFixture<BookDetail>;

  const mockBook: Book = {
    id: '1',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 25,
    image:
      'https://picsum.photos/id/28/200/300',
    category: 'Fantasy',
  };

  const mockBookService = {
    getBooks: () => [mockBook],
    getBookById: (id: string) => (id === '1' ? mockBook : undefined),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetail],
      providers: [provideRouter([]), { provide: BookService, useValue: mockBookService }],
    }).compileComponents();

    fixture = TestBed.createComponent(BookDetail);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', '1');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute the book from the service', () => {
    expect(component.book()).toEqual(mockBook);
  });

  it('should return undefined for an unknown bookId', () => {
    fixture.componentRef.setInput('id', '999');
    fixture.detectChanges();
    expect(component.book()).toBeUndefined();
  });
});
