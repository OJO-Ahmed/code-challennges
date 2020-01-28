/**
1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
**/

// SOLUTION

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sum = 0
    let output = []
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            sum = nums[i]
            if(i == j){
                continue
            }
            sum += nums[j]
            if(sum === target){
                output = [i, j]
                break
            }
        }
        
        if(sum === target){
            break  
        }
    }
    
    return output;
};