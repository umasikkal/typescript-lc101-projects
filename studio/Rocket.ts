Rocket.ts
class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems:[];
    Astronaut:[];
    constructor(name: string, totalCapacityKg:number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
}

