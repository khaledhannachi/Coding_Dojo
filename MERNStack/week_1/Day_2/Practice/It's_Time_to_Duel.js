class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        target.resilience -= this.power;
        return this;
    }
}

class Effect extends Card{
    constructor(name,cost,text){
        super(name,cost)
        this.text = text;
    }
}

class Red_Belt_Ninja extends Unit{
    constructor(name="Red Belt Ninja",cost=3,power=3,resilience=4){
        super(name,cost,power,resilience);
    }
    
}

class black_Belt_Ninja extends Unit{
    constructor(name="Black Belt Ninja",cost=4,power=5,resilience=4){
        super(name,cost,power,resilience);
    }
    
}

class Hard_Algorithm extends Effect{
    constructor(name="Hard Algorithm",cost=2,text="increase target's resilience by 3"){
        super(name,cost,text);
    }
    play(target){
        target.resilience+=3;
        return this;
    }
}

class Unhandled_Promise_Rejection extends Effect{
    constructor(name="Unhandled Promise Rejection",cost=1,text="reduce target's resilience by 2")
    {
        super(name,cost,text);
    }
    play(target){
        target.resilience-=2;
        return this;
    }
}

class Pair_Programming extends Effect{
    constructor(name="Pair Programming",cost=3,text="increase target's power by 2"){
        super(name,cost,text);
    }
    play(target){
        target.power+=2;
        return this;
    }
}
// Make an instance of "Red Belt Ninja"
const New_Red_Belt_Ninja= new Red_Belt_Ninja();
// Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
const New_Hard_Algorithm= new Hard_Algorithm ();
New_Hard_Algorithm.play(New_Red_Belt_Ninja);
console.log(New_Red_Belt_Ninja);
// Make an instance "Black Belt Ninja"
const New_Black_Belt_Ninja=new black_Belt_Ninja();
// Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
const New_Unhandled_Promise_Rejection=new Unhandled_Promise_Rejection();
New_Unhandled_Promise_Rejection.play(New_Red_Belt_Ninja);
console.log(New_Red_Belt_Ninja);
// Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
const New_Pair_Programming=new Pair_Programming();
New_Pair_Programming.play(New_Red_Belt_Ninja);
console.log(New_Red_Belt_Ninja);
// "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
New_Red_Belt_Ninja.attack(New_Black_Belt_Ninja);
console.log(New_Black_Belt_Ninja);

