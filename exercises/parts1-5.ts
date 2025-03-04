// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
let spacecraftName: string ='Determination';
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;


// Part 2: Print Days to Mars
console.log(`${spacecraftName} would take ${332.67857144} to get to mars.`);

// Code an output statement here (use a template literal):

// Part 3: Create a Function ("getDaysToLocation"
function getDaysToLocation(kilometerAway: number): number {
    let milesAway: number = kilometerAway * milesPerKilometer;
    let hours: number = milesAway / speedMph;
    return hours / 24;
}

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft class
    class Determination {
        milesPerKilometer: number = 0.621;
        name: string;
        speedMph: number;

        constructor(name:string,speedMph: number) {
            this.name = name;
            this.speedMph = speedMph;
        }
    getDaysToLocation(kilometerAway: number): number {
        let milesAway: number = kilometerAway* this.milesPerKilometer;
        let hoursTOMars: number = milesAway / this.speedMph;
        return hoursTOMars / 24;
    }
    }

// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class


// Add the required import statement BEFORE the part 1 conc


        
    


// Add the printDaysToLocation function to the Spacecraft 
getDaysToLocation(location: SpaceLocation) {
    console.log(`${this.name} would`)
}
// Paste in the code from step 6 here: