import AbleToTow from "../interfaces/AbleToTow";
import Cli from "./Cli"
import Motorbike from "./Motorbike";
//import Vehicle from "../index"
import Vehicle from "./Vehicle";
import Car from "./Car";
import Wheel from "./Wheel";

 class Truck extends Vehicle implements AbleToTow{
     //vehicle: string = "Truck";
     vin: string;
     color: string;
     make: string;
     model: string;
     year: number;
     mileage: number;
     topSpeed: number;
     wheels: any; 
     towingCapacity: number;

  constructor(vin: string, color: string, make: string, model: string, year: number, mileage: number, topSpeed: number, wheels: any, towingCapacity: number) {
      super();
      this.vin = vin
      this.color = color
      this.make = make
      this.model = model
      this.year = year
      this.mileage = mileage
      this.topSpeed = topSpeed
      this.wheels = wheels 
      this.towingCapacity = 0
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    console.log("Towing vehicle: ",)
  }
}

    export default Truck


    //const redTruck = new Truck(Cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [])