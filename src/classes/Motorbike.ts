import Cli from "./Cli";
import Vehicle from "./Vehicle"
import Wheel from "./Wheel";

class Motorbike extends Vehicle {
     //vehicle: string = "Motorbike";
     vin: string;
     color: string;
     make: string;
     model: string;
     year: number;
     mileage: number;
     topSpeed: number;
     wheels: any;

    constructor(vin: string, color: string, make: string, model: string, year: number, mileage: number, topSpeed: number, wheels: any) {
        super();
        this.vin = vin
        this.color = color
        this.make = make
        this.model = model
        this.year = year
        this.mileage = mileage
        this.topSpeed = topSpeed
        this.wheels = wheels
    }
}

export default Motorbike