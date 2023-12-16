import { CondimentDecorator } from ".";
import { Beverage } from "../Beverage";

//MocharDecorator is a concrete decorator. Notice that it extends CondimentDecorator.
// Remember CondimentDecorator extends Beverage.
export class MochaDecorator extends CondimentDecorator{
    // We're going to instantiate MochaDecorator with a reference to a Beverage using an instance variable to hold the beverage we are wrapping.
    beverage: Beverage;

    constructor(beverage:Beverage){
        super();
        this.beverage = beverage;
    }

    getDescription(){
        //append the decorator description to the beverage description
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(){
        // compute the cost of the beverage and add the cost of the decorator to the total
        return this.beverage.cost() + 0.2;
    }
}