export interface Category {
    id: number;
    title: string;
    image?: string;
    createdAt: string;
    updatedAt: string;
}

export interface CategoriesState {
    data: Category[];
}
