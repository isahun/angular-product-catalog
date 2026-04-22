import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { BookList } from './pages/book-list/book-list';
import { BookDetail } from './pages/book-detail/book-detail';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'books', component: BookList },
      { path: 'books/:id', component: BookDetail },
    ]
  },
  { path: '**', component: NotFound }
]
