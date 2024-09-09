import Cli from "./Cli";
import Vehicle from "../index"

class Wheel {
    public diameter: number;
    public width: number;
    public brand: string;
    public type: string;
    public psi: number;
    
    constructor(diameter: number, width: number, brand: string, type: string, psi: number) {
        this.diameter = diameter;
        this.width = width;
        this.brand = brand;
        this.type = type;
        this.psi = psi;
    }
}

export default Wheel
