export class WheelType {
    constructor(
        public width: number,
        public height: number,
        public color: string,
    ) {
    }

    public build(): void {
        console.log('Wheel type built');
    }
}
