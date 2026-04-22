import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailCard } from './book-detail-card';
import { Book } from '../../interfaces/book';

describe('BookDetailCard', () => {
  let component: BookDetailCard;
  let fixture: ComponentFixture<BookDetailCard>;

  const mockBook: Book = {
    id: '1',
    title: 'Test Book',
    author: 'Test Author',
    price: 25,
    image: 'https://picsum.photos/id/28/200/300',
    category: 'Test Category',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BookDetailCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('book', mockBook);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive the book input', () => {
    expect(component.book()).toEqual(mockBook);
  });
});
