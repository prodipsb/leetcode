// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


// Input: nums = [3,2,3]
// Output: 3


var majorityElement = function(nums) {

    let candidate = null;
    let count = 0;

    for(let num of nums){
        if(count === 0){
            candidate = num;

        }
        count += (num === candidate)? 1: -1;
    }

    let majorityCount = nums.length / 2;
    let actualCount = nums.filter(num =>  num === candidate).length;

    return actualCount > majorityCount ? candidate : null;
    
};

let nums = [3,2,3];

const result  = majorityElement(nums);

console.log('result', result);

