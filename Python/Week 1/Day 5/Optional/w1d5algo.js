/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */
// level
// racecar
// tacocat

const str1 = "a x a";
const expected1 = true;

// const str2 = "racecar";
// const expected2 = true;

// const str3 = "Dud";
// const expected3 = false;

// const str4 = "oho!";
// const expected4 = false;

// // take 5-7 mins to write the pseudocode here:

// // create the function and decide what params it needs and what it will return

// /**
//  * Determines if the given str is a palindrome (same forwards and backwards).

function isPalindrome(str) {
  var newstr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  if (newstr === str) {
    return true;
  } else {
    return false;
  }
}
isPalindrome("rac");
