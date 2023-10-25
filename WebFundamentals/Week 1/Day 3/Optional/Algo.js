var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);

// i should bring sunglasses and a smile!, // i should bring a coat and a smile!

for(var i=10; i>0; i--) {
    if(i != 2) {
      console.log(i);
    } else {
      console.log("ignition!");
    }
  }
      
  console.log("liftoff!");
  

// 10,9,8,7,6,5,4,3, "ignition!",1, "liftoff!"

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
if(numbers[0]>0){
    countPositives++
}
    
console.log("there are " + countPositives + " positive values");
// there are 5 positive values