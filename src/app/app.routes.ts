import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '',          component: HomeComponent },
      { path: 'books',     component: BookListComponent },
      { path: 'books/:id', component: BookDetailComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];
