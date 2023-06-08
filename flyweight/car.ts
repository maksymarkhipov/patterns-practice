import {Wheel} from "./wheel";

export class Car {
    constructor(
        public wheels: Wheel[],
    ) {
    }

    public build(): void {
        this.wheels.forEach(el => el.build());
        console.log("Car built");
    }
}
