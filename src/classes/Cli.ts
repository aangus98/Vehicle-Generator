import inquirer from 'inquirer';
import Vehicle from '../index';

class Cli {
    // Questions to prompt the user to build a vehicle
    private vehicles = [
        {
            type: 'list',
            name: 'vehicleType',
            message: 'What type of vehicle would you like to build?',
            choices: ['Car', 'Truck', 'Motorbike']
        },
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
    inquirer.prompt(this.vehicles).then((answers) => {
        const type = answers.vehicleType;
        const vin = Cli.generateVin();
        const color = answers.color;
        const make = answers.make;
        const model = answers.model;
        const year = answers.year;
        const mileage = answers.mileage;
        const topSpeed = answers.topSpeed;
        return new Vehicle(type, vin, color, make, model, year, mileage, topSpeed);
    }, (error) => {
        console.log(error);
    });
}

}

export default Cli;