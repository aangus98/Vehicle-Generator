import Driveable from "../interfaces/Driveable";
import Wheel from "./Wheel";

// create vehicles
class Vehicle implements Driveable{
    started: boolean;
    currentSpeed: number;
  
    constructor() {
      this.started = false;
      this.currentSpeed = 0;
    }

    start(): void {
        this.started = true;
        console.log("Vehicle started");
    }

    stop(): void {
        this.started = false;
        this.currentSpeed = 0;
        console.log("Vehicle stopped");
    }

    accelerate(change: number): void {
        if (this.started) {
            this.currentSpeed += change;
            console.log("Vehicle accelerated to " + this.currentSpeed);
        } else {
            console.log("Start the vehicle first");
        }
    }

    decelerate(change: number): void {
        if (this.started) {
            this.currentSpeed -= change;
            console.log("Vehicle decelerated to " + this.currentSpeed);
        } else {
            console.log("Start the vehicle first");
        }
    }

    turn(direction: string): void {
        console.log("Vehicle turned " + direction);
    }

    reverse(): void {
        console.log("Vehicle reversed");
    }
  }

  export default Vehicle;