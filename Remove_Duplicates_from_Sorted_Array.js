// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function(nums) {

    if(nums.length === 0) return 0;

    let k=1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

let nums = [1,1,2]

const result = removeDuplicates(nums);

console.log('result', result);
