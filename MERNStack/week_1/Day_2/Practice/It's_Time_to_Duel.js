class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.resilience=resilience;
    }
    attack(target){
        this.resilience -= target.power;
    }
}


class Effect extends Card{
    constructor(name,cost,power,resilience){
        super(name,cost);
        this.power=power;
        this.resilience=resilience;
    }
    attack(target){
        this.resilience -= target.power;
    }
}

