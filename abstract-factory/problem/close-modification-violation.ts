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


// function orderPizza(type: PizzaType) {

//     let pizza: Pizza;

//     //This code is not closed for modification. If the pizza shop changes its pizza offerings, we have to get into this code and modify it.
//     if (type === "cheese") {
//         pizza = new CheesePizza();
//     } else if (type === "pepperoni") {
//         pizza = new PepperoniPizza();
//     } else if (type === "clam") {
//         pizza = new ClamPizza();
//     } else if (type === "veggie") {
//         pizza = new VeggiePizza();
//     }else{
//         throw new Error("Invalid pizza type");
//     }

//     //We expect this to be always the same.
//     pizza.prepare();
//     pizza.bake();
//     pizza.cut();
//     pizza.box();
//     return pizza;
// }

// orderPizza("cheese");
// orderPizza("pepperoni");