import { Beverage } from ".";

export class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "Dark Roast Coffee";
    }
    cost() {
        return .99;
    }
}