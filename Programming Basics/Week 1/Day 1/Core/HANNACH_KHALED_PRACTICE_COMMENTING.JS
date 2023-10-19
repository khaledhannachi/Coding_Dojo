var firstMessage = " JS is awesome!";
var secondeMessage = "Happy decade of JS!";
var thirdMessage = "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈";

for (var year = 1996; year <= 2023; year++) {
  if (year == 1996) {
    console.log(year + firstMessage);
  } else if ((year - 1996) % 10 == 0) {
    console.log(secondeMessage);
  } else {
    if (year == 2023) {
      console.log(thirdMessage);
    } else {
      console.log(year + firstMessage);
    }
  }
}
