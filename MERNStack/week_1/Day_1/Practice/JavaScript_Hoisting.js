var hello;
console.log(hello);
hello = "world";
// undefined
// 2
var needle;
function test() {
  var needle;
  needle = "magnet";
  console.log(needle);
}
needle = "haystack";
test();
// magnet

// 3
var brendan;
function print() {
  brendan = "only okay";
  console.log(brendan);
}
brendan = "super cool";
console.log(brendan);
// super cool
// 4.
var food;
function eat() {
  var food = "gone";
  food = "half-chicken";
  console.log(food);
}
food = "chicken";
eat();
console.log(food);
// half-chicken, chicken

// 5

var mean = function () {
  var food = "fish";
  console.log(food);
  food = "chicken";
  console.log(food);
};
mean();
console.log(food);
console.log(food);
// fish
// chicken
// chicken
// chicken

// 6

var genre;
function rewind() {
  var genre = "r&b";
  console.log(genre);
  genre = "rock";
  console.log(genre);
}
genre = "disco";
rewind();
console.log(genre);
console.log(genre);
// r&b
// rock
// disco
// disco

// 7
function learn() {
  var dojo = "burbank";
  console.log(dojo);
  dojo = "seattle";
  console.log(dojo);
}
dojo = "san jose";
learn();
console.log(dojo);
console.log(dojo);
// burbank
// seattle
// san jose
// san jose

// 8

function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

// { name: 'Chicago', students: 65, hiring: true }
// closed for now
