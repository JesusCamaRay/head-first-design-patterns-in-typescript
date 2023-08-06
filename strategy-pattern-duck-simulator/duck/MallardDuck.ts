import { FlyWithWings } from "../fly-behavior/FlyWithWings";
import { Quack } from "../quack-behavior/Quack";
import { Duck } from "./Duck";

export class MallardDuck extends Duck {
    constructor() {
        super(new FlyWithWings(), new Quack());
    }

    display(): void {
        console.log('I\'m a real Mallard duck');
    }
}