// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice.
//  The relative order of the elements should be kept the same.

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function(nums) {

    if(nums.length <= 2) return nums.length;

    let k=2;

    for(let i = 2; i < nums.length; i++){
        if(nums[i] !== nums[k-2]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

let nums = [1,1,1,2,2,3];

const result = removeDuplicates(nums);

console.log('result', result);

