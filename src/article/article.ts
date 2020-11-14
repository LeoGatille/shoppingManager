import { Commentary } from './commentary/commentary';
export class Article {
    name: string;
    pictureUrl? : string;
    price?: number;
    categoryId: number;
    currency: string; //* Will be currencyId in future;
    comments: Commentary[] = [];
}