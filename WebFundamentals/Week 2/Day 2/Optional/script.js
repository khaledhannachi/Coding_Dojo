console.log("hello from script");

function chooseCarMake(element) {
  alert("you choose the following mark : " + element.value);
  //     console.log("Start");
  // setTimeout(alert , 5000,element.value);
  // console.log("End");
  // alert("you choose the following mark : "+element.value);
  console.log("Start");
  setTimeout(alert, 5000, "you choose the following mark : " + element.value);
  console.log("End");
}

// variable declaration
var myh1 = document.querySelector(".tomato");

var mydiv = document.querySelector("#myfavcolor");
var myinput = document.querySelector(".myinput");

function writeText() {
  // console.log(element.value);
  // console.log(myh1);
  myh1.innerText = myinput.value;
  mydiv.style.backgroundColor = myinput.value;
  mydiv.style.width = "80px";
  mydiv.style.height = "80px";
}
// <!-- promises - Call Backs -->
function message() {
  console.log("Delayed message");
}

console.log("Start");
setTimeout(message, 5000);
console.log("End");
setTimeout(alert, 5000, "you choose the following mark : " + element.value);
