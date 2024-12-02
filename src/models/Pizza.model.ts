export type Pizza ={
    id?: number;
    category_id?:number;
    productName?: string;
    description?: string;
    price?: string;
}

export enum PizzaField {
    productName ='productName',
    description ='description',
    price='price',
}
