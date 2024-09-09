// import classes
import Truck from "../src/classes/Truck";
import Car from "../src/classes/Car";
import Motorbike from "../src/classes/Motorbike";
import Wheel from "./classes/Wheel";
import Cli from "../src/classes/Cli";
// create an array of vehicles
const vehicleArray = [
  Car, Truck, Motorbike
];

// create vehicles
class Vehicle {
  public vehicle: string;
  public vin: string;
  public color: string;
  public make: string;
  public model: string;
  public year: number;
  public mileage: number;
  public topSpeed: number;

  constructor(
    vehicle: string,
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    mileage: number,
    topSpeed: number
  ) {
    this.vehicle = vehicle;
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.topSpeed = topSpeed;
  }
}

const vehicles: Vehicle[] = [];

// TODO: uncomment once trucks are implemented
// const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);

// will use default wheels
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  [],
);

// TODO: uncomment once motorbikes are implemented
// const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
// const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);

// push vehicles to array
// TODO: uncomment once trucks are implemented
// vehicles.push(truck1);
vehicleArray.push(car1);
// TODO: uncomment once motorbikes are implemented
// vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();


export default Vehicle;