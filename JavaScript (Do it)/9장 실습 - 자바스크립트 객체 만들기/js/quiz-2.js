class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        alert(`${this.name} is running.`);
    }
}

class Cat extends Pet {
    constructor(name, color, breed) {
        super(name, color);
        this.breed = breed;
    }
    
    viewInfo() {
        alert(`이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}`);
    }
}

const bori = new Cat("보리", "흰색", "코숏");
bori.viewInfo();