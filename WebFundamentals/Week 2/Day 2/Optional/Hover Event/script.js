function over(element) {
  element.style.backgroundColor = "red";
}

function out(element) {
  element.style.backgroundColor = "green";
}

console.log("Hello from script");

var tomato = document.querySelector("#myimg");
function switchImg() {
  // console.log("I am switching images");
  console.log(tomato.src);
  if (
    tomato.src ==
    "http://127.0.0.1:5500/Week%202/Day%202/Optional/Hover%20Event/1.jpg"
  ) {
    console.log(tomato.src);
    tomato.src =
      "http://127.0.0.1:5500/Week%202/Day%202/Optional/Hover%20Event/2.jpg";
  } else {
    console.log(tomato.src);
    tomato.src =
      "http://127.0.0.1:5500/Week%202/Day%202/Optional/Hover%20Event/3.jpg";
  }
}

var myColor = document.querySelector("h1");
function changeColor() {
  myColor.style.backgroundColor = "black";
  myColor.style.color = "white";
}

//Declare a variable count outside of my likes() function

var count = 0;

var message = document.querySelector("p");

function likes() {
  count = count + 1;
  if (count == 1) {
    message.innerText = "I have " + count + "like";
  } else {
    message.innerText = "I have " + count + " likes";
  }

  // count++;
}

var myDivision = document.querySelector(".mydiv");
function showInnerText() {
  console.log("innertext: " + myDivision.innerText);
  console.log("innerHTML: " + myDivision.innerHTML);
  myDivision.style.backgroundColor = "green";
}
