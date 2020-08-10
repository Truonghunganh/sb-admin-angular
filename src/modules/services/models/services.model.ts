export {};
export class Service {
    name: string;
    description: string;
    price: number;
    image_id?: number;
    category_ids?: number[];
    constructor(
        name: string,
        description: string,
        price: number,
        image_id?: number,
        category_ids?: number[]
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image_id = image_id;
        this.category_ids = category_ids;
    }
}
