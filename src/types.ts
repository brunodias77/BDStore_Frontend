export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  name: string;
  description: string;
  active: boolean;
  value: number;
  dateAdded: Date;
  image: string;
  stock: number;
  id: string;
  domainEvents: any[] | null; // You can adjust the type as per your requirements
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
