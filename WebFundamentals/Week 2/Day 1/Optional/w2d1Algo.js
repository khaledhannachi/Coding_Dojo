var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();

console.log(floor);
console.log(ceiling);
console.log(random);

1, 4, 0;

function d6() {
  var roll = Math.random();
  roll = roll * 5;
  roll = roll + 1;
  roll = math.ceil(roll);
  return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];
function randomanswer(answer) {
  var stack = math.random();
  stack = stack * lifesAnswers.length;
  stack = math.floor(stack);
  return lifesAnswers(stack);
}
