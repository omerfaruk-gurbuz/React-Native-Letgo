export declare class Product {
    readonly id: string;
    readonly image: string;
    readonly images: string[];
    readonly brand: string;
    readonly price: number;
    readonly rating: number;
    readonly numReview: number;
    readonly isFeatured?: boolean | null;
    readonly name: string;
    readonly description: string;
    readonly countInStock?: number | null;
    readonly category?: number;
    // readonly category?: Category | null;
//     readonly createdAt?: string | null;
//     readonly updatedAt?: string | null;
//     constructor(init: ModelInit<Product, ProductMetaData>);
//     static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Category {
    readonly id: string;
    readonly name: string;
    readonly src: string;
    // readonly products?: (Product | null)[] | null;
    // readonly createdAt?: string | null;
    // readonly updatedAt?: string | null;
    // constructor(init: ModelInit<Category, CategoryMetaData>);
    // static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
  }

export declare class Filtering {
    readonly id: string;
    readonly name: string;
    // readonly src: string;
    // readonly products?: (Product | null)[] | null;
    // readonly createdAt?: string | null;
    // readonly updatedAt?: string | null;
    // constructor(init: ModelInit<Category, CategoryMetaData>);
    // static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
  }

export declare class Message {
    readonly id: number;
    readonly name: string;
    readonly ProductName: string;
    readonly situation: string;
    readonly date: string;
    // readonly products?: (Product | null)[] | null;
    // readonly createdAt?: string | null;
    // readonly updatedAt?: string | null;
    // constructor(init: ModelInit<Category, CategoryMetaData>);
    // static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
  }