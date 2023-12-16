import { DarkRoast } from "./Beverage/DarkRoast";
import { Espresso } from "./Beverage/Espresso";
import { HouseBlend } from "./Beverage/HouseBlend";
import { MochaDecorator } from "./Decorators/MochaDecorator";
import { SoyDecorator } from "./Decorators/SoyDecorator";
import { WhipDecorator } from "./Decorators/WhipDecorator";

const beverage1 = new Espresso();
console.log(beverage1.getDescription() + " $" + beverage1.cost());

let beverage2 = new DarkRoast();
beverage2 = new MochaDecorator(beverage2);
beverage2 = new MochaDecorator(beverage2);
beverage2 = new WhipDecorator(beverage2);

console.log(beverage2.getDescription() + " $" + beverage2.cost());

let beverage3 = new HouseBlend();
beverage3 = new SoyDecorator(beverage3);
beverage3 = new MochaDecorator(beverage3);
beverage3 = new WhipDecorator(beverage3);

console.log(beverage3.getDescription() + " $" + beverage3.cost());