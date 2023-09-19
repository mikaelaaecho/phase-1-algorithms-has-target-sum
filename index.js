function hasTargetSum(array, target) {
  //iterate through each number of the array
for (let i = 0; i < array.length; i++) {
  //for the current num, indentify a complement that adds to the target number (comp = target - num)
const complement = target - array[i] 
//iterate through the rest fo the array 
for ( let j = i + 1; j < array.length; j++) {
  //check if any number is our compliemnt
  //if so, return true
  if (array[j] === complement) return true
}
}
// if i reach the end of the array, return false
return false;
}

/* 
 make a function that checks if two numbers are the array
 add up to some taget
 and the target us `6` i should return true because 2 and 4 add to 6
 for each number check if there is anotehr number that adds to the target
*/

/* 
 iterate througheach number of the array
  forthe current num, indentify a complement that adds to the target number (comp = target - num)
  iterate through the rest fo the array 
  check if any number is our compliemnt
  if so, return true

if i reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum ([3, 6, 67], 5))
}

module.exports = hasTargetSum;
