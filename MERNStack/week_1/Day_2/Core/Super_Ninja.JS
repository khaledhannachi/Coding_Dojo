class Ninja{
    constructor (name){
        this.name=name;
        this.health=90;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(this.name);
        return this;
    }
    showStats(){
        console.log(
            `Name: ${this.name}, strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log(this.health);
        return this;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

