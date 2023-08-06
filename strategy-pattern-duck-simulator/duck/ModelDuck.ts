import { FlyNoWay } from "../fly-behavior/FlyNoWay";
import { Quack } from "../quack-behavior/Quack";
import { Duck } from "./Duck";

export class ModelDuck extends Duck{
    constructor() {
        super(new FlyNoWay(), new Quack());
    }
    
    display(): void {
        console.log('I\'m a model duck');
    }
}