import { Beverage } from "../Beverage";

// CondimentDecorator acts as our abstract decorator class. 
// It extends Beverage so that it can be used in place of a Beverage and it also declares getDescription() abstractly so that each concrete decorator must implement it.
export abstract class CondimentDecorator extends Beverage {

    getDescription(): string {
        return this.description;
    }
}