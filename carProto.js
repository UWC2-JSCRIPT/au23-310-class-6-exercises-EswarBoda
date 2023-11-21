/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;
    }

    accelerate() {
        this.currentSpeed++;
    }

    brake() {
        this.currentSpeed--;
    }

    toString() {
        return `Car model ${this.model} has a current speed of ${this.currentSpeed}`;
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const toyota = new Car('Toyota');
toyota.accelerate();
toyota.accelerate();
toyota.brake();
console.log(toyota.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car {
    constructor(model) {
       super(model);
       this.motor = 'Electric';
    }
    
    // Electric car accelerate() calls parent class accelerate twice
    accelerate() {
        super.accelerate(); 
        super.accelerate();
    }

    // Electric car toString() method
    toString() {
        return `Electric Car model ${this.model} has twice the speed of ${this.currentSpeed} non-electric car.`;
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const tesla = new ElectricCar('Tesla');
tesla.accelerate();
tesla.accelerate();
tesla.brake();
console.log(tesla.toString());