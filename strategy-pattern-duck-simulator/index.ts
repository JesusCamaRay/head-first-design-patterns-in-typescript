// Strategy Pattern
import { MallardDuck } from "./duck/MallardDuck";
import { ModelDuck } from "./duck/ModelDuck";
import { FlyRocketPowered } from "./fly-behavior/FlyRocketPowered";

// We are encapsulating what varies in separate classes and using composition to glue the behavior into the Duck class.

const mallard = new MallardDuck();
mallard.performQuack();
mallard.performFly();

// change duck behavior at runtime

const modelDuck = new ModelDuck();
modelDuck.performFly();
modelDuck.setFlyBehavior(new FlyRocketPowered());
modelDuck.performFly();