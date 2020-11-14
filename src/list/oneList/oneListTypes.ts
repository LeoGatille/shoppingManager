// export type List = {
//     name: string;
//     nbArticles: number;
//     urlImage?: string;
// }
export class List {
    constructor(obj: any) {
        Object.assign(this, obj);
    }
    name: string;
    picture_url?: string;
    nbArticles: number
}