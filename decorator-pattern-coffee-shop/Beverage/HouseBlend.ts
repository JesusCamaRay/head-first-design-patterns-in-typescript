import { Beverage } from ".";

export class HouseBlend extends Beverage{
    constructor(){
        super();
        this.description = "House Blend Coffee";
    }
    cost(): number{
        return .89;
    }
}