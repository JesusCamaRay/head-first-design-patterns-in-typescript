// type PizzaType = "cheese" | "pepperoni" | "clam" | "veggie";

// abstract class Pizza {

//     name: string;
//     dough: string;
//     sauce: string;

//     toppings: string[] = [];

//     constructor(){
//         this.name = "";
//         this.dough = "";
//         this.sauce = "";
//     }

//     prepare() {
//         console.log(`Preparing ${this.name}`);
//         console.log("Tossing dough...");
//         console.log("Adding sauce...");
//         console.log("Adding toppings: ");
//         this.toppings.forEach(topping => console.log(`  ${topping}`));
//     }
//     bake() {
//         console.log("Bake for 25 minutes at 350 degrees");
//     }
//     cut() {
//         console.log("Cutting the pizza into diagonal slices");
//     }
//     box() {
//         console.log("Place pizza in official PizzaStore box");
//     }

//     getName():string {
//         return this.name;
//     }
// }


// class NYCheesePizza extends Pizza {
//     constructor(){
//         super();
//         this.name = "NY Style Sauce and Cheese Pizza";
//         this.dough = "Thin Crust Dough";
//         this.sauce = "Marinara Sauce";
//         this.toppings.push("Grated Reggiano Cheese");
//     }
// }
// class NYPepperoniPizza extends Pizza {}
// class NYClamPizza extends Pizza {}
// class NYVeggiePizza extends Pizza {}

// class ChicagoCheesePizza extends Pizza {
//     constructor(){
//         super();
//         this.name = "Chicago Style Deep Dish Cheese Pizza";
//         this.dough = "Extra Thick Crust Dough";
//         this.sauce = "Plum Tomato Sauce";
//         this.toppings.push("Shredded Mozzarella Cheese");
//     }

//     cut(){
//         console.log("Cutting the pizza into square slices");
//     }
// }
// class ChicagoPepperoniPizza extends Pizza {}
// class ChicagoClamPizza extends Pizza {}
// class ChicagoVeggiePizza extends Pizza {}

// class CaliforniaCheesePizza extends Pizza {}
// class CaliforniaPepperoniPizza extends Pizza {}
// class CaliforniaClamPizza extends Pizza {}
// class CaliforniaVeggiePizza extends Pizza {}


// //Pizza Store now is abstract
//  abstract class PizzaStore {
//     //We replaced the new operator with a create method on the factory object. No more concrete instantiations.
//     orderPizza(type: string){
//         //Now createPizza is back to being a call to a method in the PizzaStore rather than on a factory object.
//         const pizza = this.createPizza(type);
//         pizza.prepare();
//         pizza.bake();
//         pizza.cut();
//         pizza.box();
//         return pizza;
//     }

//     //This method is now abstract. It is up to the concrete PizzaStore to implement it.
//     abstract createPizza(type: string): Pizza;
//     //A factory method handles object creation and encapsulates it in a subclass. 
//     //This decouples the client code in the superclass from the object creation code in the subclass.

// }

// //Now we can create concrete PizzaStores that implement the createPizza method.
// class NYPizzaStore extends PizzaStore{
//     createPizza(type: string){
//         let pizza: Pizza;
//         if(type === "cheese"){
//             pizza = new NYCheesePizza();
//         }else if(type === "pepperoni"){
//             pizza = new NYPepperoniPizza();
//         }else if(type === "clam"){
//             pizza = new NYClamPizza();
//         }else if(type === "veggie"){
//             pizza = new NYVeggiePizza();
//         }else{
//             throw new Error("Invalid pizza type");
//         }
//         return pizza;
//     }
// }

// class ChicagoPizzaStore extends PizzaStore{
//     createPizza(type: string){
//         let pizza: Pizza;
//         if(type === "cheese"){
//             pizza = new ChicagoCheesePizza();
//         }else if(type === "pepperoni"){
//             pizza = new ChicagoPepperoniPizza();
//         }else if(type === "clam"){
//             pizza = new ChicagoClamPizza();
//         }else if(type === "veggie"){
//             pizza = new ChicagoVeggiePizza();
//         }else{
//             throw new Error("Invalid pizza type");
//         }
//         return pizza;
//     }
// }

// class CaliforniaPizzaStore extends PizzaStore {
//     createPizza(type: string){
//         let pizza: Pizza;
//         if(type === "cheese"){
//             pizza = new CaliforniaCheesePizza();
//         }else if(type === "pepperoni"){
//             pizza = new CaliforniaPepperoniPizza();
//         }else if(type === "clam"){
//             pizza = new CaliforniaClamPizza();
//         }else if(type === "veggie"){
//             pizza = new CaliforniaVeggiePizza();
//         }else{
//             throw new Error("Invalid pizza type");
//         }
//         return pizza;
//     }
// }

// //Let cook some pizzas. Ethan wants a NY style cheese pizza. And Joel wants a Chicago style cheese pizza.
// const nyStore = new NYPizzaStore();
// const chicagoStore = new ChicagoPizzaStore();

// const ethanPizza = nyStore.orderPizza("cheese");
// console.log(`Ethan ordered a ${ethanPizza.getName()}\n`)

// const joelPizza = chicagoStore.orderPizza("cheese");
// console.log(`Joel ordered a ${joelPizza.getName()}\n`)