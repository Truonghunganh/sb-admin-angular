export {};
export class Category {
    id?: number;
    name: string;
    description: string;
    image_id?: number;
    constructor(name: string, description: string, imageId?: number) {
        this.name = name;
        this.description = description;
        this.image_id = imageId;
    }
}
