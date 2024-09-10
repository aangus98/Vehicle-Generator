import inquirer from 'inquirer';
import Vehicle from './Vehicle';
import Wheel from './Wheel';
import Car from './Car';
import Truck from './Truck';

class Cli {

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
               // return new Vehicle(type, vin, color, make, model, year, mileage, topSpeed, wheels);
                return new Car(vin, color, make, model, year, mileage, topSpeed, wheels);
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

export default Cli;