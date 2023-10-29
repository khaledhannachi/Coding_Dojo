var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);

// // apples and apples

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// // apples and oranges

var start = 0;
var end = 12;

while (start < end) {
  console.log("start: " + start + ", end: " + end);
  start += 2;
  end -= 2;
}

// start:  0  , end:  12
// start:  2  , end:  10
// start:  4  , end:   8

function reverse(arr) {
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverse(["a", "b", "c", "d", "e"]));
