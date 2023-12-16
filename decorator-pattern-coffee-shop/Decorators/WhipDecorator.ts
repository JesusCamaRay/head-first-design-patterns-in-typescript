import { CondimentDecorator } from ".";
import { Beverage } from "../Beverage";

export class WhipDecorator extends CondimentDecorator{
    beverage: Beverage;
    constructor(beverage:Beverage){
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    cost(): number {
        return this.beverage.cost() + .10;
    }
}