// //Simple Pizza Factory

// type PizzaType = "cheese" | "pepperoni" | "clam" | "veggie";

// class Pizza {
//     prepare() {
//         console.log("Preparing pizza");
//     }
//     bake() {
//         console.log("Baking pizza");
//     }
//     cut() {
//         console.log("Cutting pizza");
//     }
//     box() {
//         console.log("Boxing pizza");
//     }
// }

// class CheesePizza extends Pizza {
//     prepare() {
//         console.log("Preparing pizza with cheese");
//     }
//  }
// class PepperoniPizza extends Pizza { 
//     prepare() {
//         console.log("Preparing pizza with pepperoni");
//     }
// }
// class ClamPizza extends Pizza { }
// class VeggiePizza extends Pizza { }

// class SimplePizzaFactory{
//     createPizza(type: string){
//         let pizza: Pizza;
//         if(type === "cheese"){
//             pizza = new CheesePizza();
//         }else if(type === "pepperoni"){
//             pizza = new PepperoniPizza();
//         }else if(type === "clam"){
//             pizza = new ClamPizza();
//         }else if(type === "veggie"){
//             pizza = new VeggiePizza();
//         }else{
//             throw new Error("Invalid pizza type");
//         }
//         return pizza;
//     }

// }

// class PizzaStore {
//     factory: SimplePizzaFactory;
//     constructor(factory: SimplePizzaFactory){
//         this.factory = factory;
//     }
//     //We replaced the new operator with a create method on the factory object. No more concrete instantiations.
//     orderPizza(type: string){
//         const pizza = this.factory.createPizza(type);
//         pizza.prepare();
//         pizza.bake();
//         pizza.cut();
//         pizza.box();
//         return pizza;
//     }

// }


// const factory = new SimplePizzaFactory();
// const store = new PizzaStore(factory);
// store.orderPizza("cheese");
// store.orderPizza("pepperoni");