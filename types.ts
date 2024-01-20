export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;

  order: number,
  image: string,
  options: any,
  // billboard: Billboard;
};

export interface Product {
  id: string;
  name: string;
  images: string[];
  description: string;
  price: number;
  stock: number;
  status: string;
  is_featured: boolean;
  options: any;

  category_id?: string;
  category?: Category;
}

export interface Image {
  id: string;
  url: string;
}

// export interface Image {
//   id: string;
//   url: string;
// }

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

export interface Price {
  id: string;
  name: string;
  value: string;
}