import {WheelType} from "./wheel-type";

export class Wheel {
    constructor(
        public type: WheelType,
    ) {
    }

    public build(): void {
        this.type.build();
        console.log("Wheel built");
    }
}
