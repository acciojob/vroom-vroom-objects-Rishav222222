// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add the getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// Define the SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call the Car constructor
    this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add the getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed()); // Output: 200

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;