/* 
String Encode

You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 

If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

// const str1 = "aaaabbcddd";
// const expected1 = "a4b2c1d3";

// const str2 = "";
// const expected2 = "";

// const str3 = "a";
// const expected3 = "a";

// // ! Bonus
// const str4 = "bbcc";
// const expected4 = "bbcc";

// const str5 = "bc";
// const expected5 = "bc";

function encodeStr(str) {
  var expected = " ";
  var count = 1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      if (count === 1) {
        expected += str[i];
      } else {
        expected += str[i] + count;
      }
      count = 1;
    }
  }
  if (expected.length < str.length) {
    return expected;
  } else {
    return str;
  }
}
console.log(encodeStr("aadd"));
