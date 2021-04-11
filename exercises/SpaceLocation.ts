// Paste in the provided code here:
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }
}
getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * this.milesPerKilometer;
    let hours: number = milesAway / this.speedMph;
    return hours /24;
}

printDaysToLocation(location: SpaceLocation) {
   console.log (`${spacecraftName} would take ${this.getDaysToLocation {daysToMars} days to get to ${Mars}.`);
}
}