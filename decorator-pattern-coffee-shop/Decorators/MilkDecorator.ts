import { CondimentDecorator } from ".";
import { Beverage } from "../Beverage";

export class MilkDecorator extends CondimentDecorator {

    beverage: Beverage;

    constructor(beverage:Beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", Milk";
    }
    cost() {
        return this.beverage.cost() + .10;
    }
}