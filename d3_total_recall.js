// Creating Classes & Factories from Week 4 Day 4 in Canvas

class Hamster {
    constructor(name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }

    wheelRun() {
        console.log("squeak squeak");
    }

    eatFood() {
        console.log("nibble nibble");
    }

    getPrice() {
        return this.price;
    }
}

class Person {
    constructor(name) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`I am ${this.name} hello`)
    }
    eat() {
        this.weight++
        this.mood++
    }
    exercise() {
        this.weight--
    }
    ageUp() {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }
}

let timmy =  new Person("timmy");

for (let i = 0; i < 5; i++) {
    timmy.ageUp();
}

for (let i = 0; i < 5; i++) {
    timmy.eat();
}

for (let i = 0; i < 5; i++) {
    timmy.exercise();
}

for (let i = 0; i < 9; i++) {
    timmy.ageUp();
}

let gus = new Hamster("gus");

gus.owner = timmy.name;

timmy.buyHamster(gus);

for (let i = 0; i < 15; i++) {
    timmy.ageUp();
}
for (let i = 0; i < 2; i++) {
    timmy.eat();
}

for (let i = 0; i < 2; i++) {
    timmy.exercise();
}

class Dinner {
    constructor () {
        this.appetizer = ""
        this.entree = ""
        this.dessert = ""
    }
  
}

class Chef {
    name(appetizer, entree, dessert) {
       return Dinner;
   }

}
console.log();
