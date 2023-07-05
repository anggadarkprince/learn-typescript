export type ID = string | number;

export type Category = {
    id: ID;
    category: string;
    description?: string;
}

export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
    description?: string;
}
