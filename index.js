function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      console.log(array[i], array[j])
      if((array[i] + array[j]) === target){
      return true
      } 
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/
/* 
  Add your pseudocode here
  iterrate through an array twice
  if the sum of each itteration equals the input number then return true 

*/

/*
  Add written explanation of your solution here
  Given an array, check to see if any 2 numbers sum up to the input number
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
}

module.exports = hasTargetSum;
