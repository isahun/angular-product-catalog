# Product Catalog App

A single-page application built with **Angular 18+** that displays a catalog of products with navigation between a list view and a detail view.

---

## Features

- Browse all products in a card-based list
- View full details of a single product
- Navigate between pages using the Angular Router
- Responsive layout with a shared navigation bar

---

## Tech Stack

- **Angular 18+** (standalone components, signal-based inputs)
- **TypeScript**
- **Angular Router** (nested routes)
- **Vitest + jsdom** (unit testing)

---

## Project Structure

```
src/
└── app/
    ├── data/
    │   └── products.ts          # Static product data
    ├── interfaces/
    │   └── product.ts           # Product interface
    ├── services/
    │   └── product.service.ts   # Data access layer
    ├── components/
    │   ├── product-card/        # Card shown in the list
    │   └── product-detail-card/ # Card shown in the detail page
    ├── pages/
    │   ├── home/                # Landing page
    │   ├── product-list/        # /products route
    │   ├── product-detail/      # /products/:productId route
    │   └── not-found/           # Wildcard route
    ├── layout/                  # Shared nav + router outlet
    ├── app.routes.ts
    ├── app.config.ts
    └── app.ts
```

---

## Data Model

```typescript
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
```

---

## Routing

| Path                   | Component       | Description                             |
| ---------------------- | --------------- | --------------------------------------- |
| `/`                    | `Home`          | Landing page with a link to the catalog |
| `/products`            | `ProductList`   | Grid of all products                    |
| `/products/:productId` | `ProductDetail` | Full detail for one product             |
| `**`                   | `NotFound`      | 404 fallback page                       |

Routes are nested under a shared `Layout` component that provides the navigation bar.

---

## Key Angular Patterns Used

### Signal-based required inputs

```typescript
// product-card.ts
export class ProductCard {
  product = input.required<Product>();
}
```

```typescript
// parent template
<app-product-card [product]="p" />
```

### Functional dependency injection

```typescript
// product-list.ts
export class ProductList {
  private service = inject(ProductService);
  products = this.service.getProducts();
}
```

### Computed signals

```typescript
// product-detail.ts
export class ProductDetail {
  productId = input.required<string>();
  private service = inject(ProductService);
  product = computed(() => this.service.getProductById(this.productId()));
}
```

---

## Running the App

```bash
npm install
ng serve
```

Open [http://localhost:4200](http://localhost:4200).

---

## Running Tests

```bash
ng test
```

### Testing patterns used

**Components with required inputs** — use `fixture.componentRef.setInput()`:

```typescript
fixture.componentRef.setInput('product', mockProduct);
await fixture.whenStable();
```

**Components with router dependencies** — provide an empty router:

```typescript
providers: [provideRouter([])];
```

**Mocking services**:

```typescript
const mockService = { getProducts: () => [...] };
providers: [{ provide: ProductService, useValue: mockService }]
```

---
