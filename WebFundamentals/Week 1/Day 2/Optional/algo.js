// lesson one
var a = 25;
a = a - 13;
console.log(a / 2);
a = "hello";
console.log(a + "hello");
// 6, hellohello

// lesson two
for (var i = 0; i < 10; i++) {
  console.log(i);
  i = i + 3;
}

console.log("outside of the loop " + i);
// 0, 4,8
// outside of the loop 12

// lesson three

function getTotal(arrayOfNumbers) {
  var sum = arrayOfNumbers[0];

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log("the current sum is: " + sum);
  }

  console.log("the total is: " + sum);
}
tail;
getTotal([1, 3, 5]);

// the current sum is: 2
// the current sum is: 2+3=5
// the current sum is: 5+5=10

// the total is =10
