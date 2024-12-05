// Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

var rotate = function(nums, k) {

    k = k % nums.length;

    if(k !==0){
        let temp = nums.slice(-k).concat(nums.slice(0, -k));
        for(let i=0; i < nums.length; i++){
            nums[i] = temp[i];
            
        }
    }
    
};

let nums = [1,2,3,4,5,6,7]; let k = 3;

const result = rotate(nums, k);

console.log('result', result);