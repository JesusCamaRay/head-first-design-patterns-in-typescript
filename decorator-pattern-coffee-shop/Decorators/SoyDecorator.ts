import { CondimentDecorator } from ".";
import { Beverage } from "../Beverage";

export class SoyDecorator extends CondimentDecorator{
    beverage: Beverage;

    constructor(beverage:Beverage){
        super();
        this.beverage = beverage;
    }

    getDescription(){
        return this.beverage.getDescription() + ", Soy";
    }

    cost(){
        return this.beverage.cost() + .15;
    }
}