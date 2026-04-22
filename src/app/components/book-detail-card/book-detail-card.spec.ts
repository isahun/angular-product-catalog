import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailCard } from './book-detail-card';

describe('BookDetailCard', () => {
  let component: BookDetailCard;
  let fixture: ComponentFixture<BookDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BookDetailCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
