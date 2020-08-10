export {};
export class Promotion {
    name: string;
    start_date: string;
    end_date: string;
    discount: string;
    constructor(name: string, start_date: string, end_date: string, discount: string) {
        this.name = name;
        this.start_date = start_date;
        this.end_date = end_date;
        this.discount = discount;
    }
}
