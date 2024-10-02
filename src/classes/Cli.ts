import inquirer from 'inquirer';
import Vehicle from './Vehicle.js';
import Car from './Car.js';
import Truck from './Truck.js';
import Motorbike from './Motorbike.js';

// importing classes from other files
import { stat } from 'fs';
import Wheel from './Wheel.js';

// define the Cli class
class Cli {
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well
    vehicles: (Car | Truck | Motorbike)[]; // Union operator used here
  // TODO: You will need to use the Union operator to define additional types for the array
    selectedVehicleVin: string | undefined;
  // TODO: See the AbleToTow interface for an example of how to use the Union operator
    exit: boolean = false;

  // TODO: Update the constructor to accept Truck and Motorbike objects as well
  constructor(vehicles: (Car)[]) {
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          // TODO: Update the choices array to include Truck and Motorbike
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          // create a car
          this.createCar();
        }
        // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type
        else if (answers.vehicleType === 'Truck') {
          this.createTruck();
        } else {
          this.createMotorbike();
        }
      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers) => {
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Truck constructor
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          parseInt(answers.towingCapacity)
        );
        // TODO: push the truck to the vehicles array
        this.vehicles.push(truck);
        // TODO: set the selectedVehicleVin to the vin of the truck
        this.selectedVehicleVin = truck.vin;
        // TODO: perform actions on the truck
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Motorbike constructor
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [
            new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
            new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand),
          ]
        );
        // TODO: push the motorbike to the vehicles array
        this.vehicles.push(motorbike);
        // TODO: set the selectedVehicleVin to the vin of the motorbike
        this.selectedVehicleVin = motorbike.vin;
        // TODO: perform actions on the motorbike
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object
  findVehicleToTow(selectedTruck: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers) => {
        // check if the selected vehicle is the truck
        if (answers.vehicleToTow.vin === selectedTruck.vin) {
          console.log("A truck cannot tow itself.");
          this.performActions();
          return;
        }

        // if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action
        selectedTruck.tow(answers.vehicleToTow);
        console.log(`Towing vehicle: ${answers.vehicleToTow.vin}`);
        this.performActions();
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          // TODO: add options to tow and wheelie
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Select or create another vehicle',
            'tow',
            'wheelie',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
        // perform the selected action
        if (answers.action === 'Print details') {
          // find the selected vehicle and print its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
          // find the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          // find the selected vehicle and accelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          // find the selected vehicle and decelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          // find the selected vehicle and stop it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
          // find the selected vehicle and turn it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
          // find the selected vehicle and turn it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } else if (answers.action === 'Reverse') {
          // find the selected vehicle and reverse it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
        }
        // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
        else if (answers.action === 'tow') {
          const selectedTruck = this.vehicles.find((vehicle) => vehicle.vin === this.selectedVehicleVin) as Truck;
          if (selectedTruck) {
            this.findVehicleToTow(selectedTruck);
            return;
          }
        }
        // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
        else if (answers.action === 'wheelie') {
          const selectedMotorbike = this.vehicles.find((vehicle) => vehicle.vin === this.selectedVehicleVin) as Motorbike;
          if (selectedMotorbike) {
            selectedMotorbike.wheelie();
          }
        }
        else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
        } else {
          // exit the cli if the user selects exit
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions();
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}


/*class Cli {

    private vehicles: Vehicle[] = [];

    constructor(vehicles: Vehicle[]) {

        this.vehicles = vehicles;
    }


    private vehicleSelector  = [
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Create new vehicle', "Select a vehicle"]
        }
    ]

    private vehicleArray = [
        {
            type: 'list',
            name: 'vehicle',
            message: 'Select a vehicle',
            choices: ['Car', 'Truck', 'Motorbike']
        },
    ];

    private createVehicle(action: string) {
        if (action === 'Car') {
            return [
                {
                    type: 'input',
                    name: 'color',
                    message: 'Enter the color of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'make',
                    message: 'Enter the make of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'model',
                    message: 'Enter the model of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'year',
                    message: 'Enter the year of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'mileage',
                    message: 'Enter the mileage of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'topSpeed',
                    message: 'Enter the top speed of the vehicle:'
                }
            ];
        } else if (action === 'Truck') {
            return [
                {
                    type: 'input',
                    name: 'color',
                    message: 'Enter the color of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'make',
                    message: 'Enter the make of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'model',
                    message: 'Enter the model of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'year',
                    message: 'Enter the year of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'mileage',
                    message: 'Enter the mileage of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'topSpeed',
                    message: 'Enter the top speed of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'towingCapacity',
                    message: 'Enter the towing capacity of the vehicle:'
                }
            ];
        } else {
            return [
                {
                    type: 'input',
                    name: 'color',
                    message: 'Enter the color of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'make',
                    message: 'Enter the make of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'model',
                    message: 'Enter the model of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'year',
                    message: 'Enter the year of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'mileage',
                    message: 'Enter the mileage of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'topSpeed',
                    message: 'Enter the top speed of the vehicle:'
                }
            ];
        }
    }
    // Generates 17 randomized numbers and letters
    static generateVin(): string {
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let vin = '';
        for (let i = 0; i < 17; i++) {
            vin += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return vin;
    }

    // Prompt the user to build a vehicle
   startCli() {
    return inquirer.prompt(this.vehicleSelector).then((response) => {
        if (response.action === 'Create new vehicle') {
            return inquirer.prompt(this.createVehicle(response.action)).then((answers) => {
                const type = answers.vehicleType;
                const vin = Cli.generateVin();
                const color = answers.color;
                const make = answers.make;
                const model = answers.model;
                const year = answers.year;
                const mileage = answers.mileage;
                const topSpeed = answers.topSpeed;
                const wheels = Wheel.createWheels();
                const towingCapacity = answers.towingCapacity;
               // return new Vehicle(type, vin, color, make, model, year, mileage, topSpeed, wheels);
               if (type === 'Car') { 
               return new Car(vin, color, make, model, year, mileage, topSpeed, wheels);
               } else if (type === 'Truck') {
                   return new Truck(vin, color, make, model, year, mileage, topSpeed, wheels, towingCapacity);
                } else {
                    return new Motorbike(vin, color, make, model, year, mileage, topSpeed, wheels);
                }
               // return new type(vin, color, make, model, year, mileage, topSpeed, wheels);
            }, (error) => {
                console.log(error);
                return null;
            });
        } else {
            const selectVehicle = [
                {
                    type: 'list',
                    name: 'vehicle',
                    message: 'Select a vehicle',
                    choices: ['Car', 'Truck', 'Motorbike']
                }
            ];
            return inquirer.prompt(selectVehicle).then((answers) => {
                const vehicle = answers.vehicle;
                return vehicle;
            }, (error) => {
                console.log(error);
                return null;
            });
        }
    });

}
}
*/
export default Cli;