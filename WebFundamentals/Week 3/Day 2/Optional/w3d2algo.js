function twoSum(numbers, targetSum) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      if (numbers[j] + numbers[j] == targetSum) {
        return [i, j];
      }
    }
  }
}

twoSum([2, 11, 7, 15], 9);
