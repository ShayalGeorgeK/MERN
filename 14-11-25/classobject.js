class Car {
    constructor() {
        console.log("My Car");
        
    }
}
//inheritance
class Bike extends Car {
    constructor() {
        console.log("My Bike");
        super()
    }
}

const myCar1= new Bike