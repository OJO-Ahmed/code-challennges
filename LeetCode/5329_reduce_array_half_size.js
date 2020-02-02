/***
5329. Reduce Array Size to The Half

Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.

Return the minimum size of the set so that at least half of the integers of the array are removed.

 

Example 1:

Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.
Example 2:

Input: arr = [7,7,7,7,7,7]
Output: 1
Explanation: The only possible set you can choose is {7}. This will make the new array empty.
Example 3:

Input: arr = [1,9]
Output: 1
Example 4:

Input: arr = [1000,1000,3,7]
Output: 1
Example 5:

Input: arr = [1,2,3,4,5,6,7,8,9,10]
Output: 5
 

Constraints:

1 <= arr.length <= 10^5
arr.length is even.
1 <= arr[i] <= 10^5
***/

// SOLUTION

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    arr.sort((a,b) => a - b)
    let tem = {}
    let counter = 1
    for(let i = 0; i < arr.length; i++){
        if(tem.hasOwnProperty(arr[i])){
            tem[arr[i]]++
        }else{
          tem[arr[i]] = 1  
        }
    }
    
    let sortVal = Object.entries(tem)
    sortVal.sort((a,b) => b[1] - a[1])
    let allKeys = sortVal.map(a => parseInt(a[0]))
    let allValues = sortVal.map(a => parseInt(a[1]))
    let output = [];
    for(let i = 0; i < allKeys.length; i++){
        let index = arr.indexOf(allKeys[i])
        output.push([index])
        let dArray = [...arr]
        dArray.splice(index,allValues[i])
        let temArray = [...dArray]
        
        // break loop if length of array left after splicing is atleast half of the original array
        if(temArray.length <= arr.length/2){
            break
        }
        
        for(let j = 0; j < allKeys.length; j++){
            if(i == j){
                continue
            }
            let nextIndex = temArray.indexOf(allKeys[j])
            output[i].push(nextIndex)
            temArray.splice(nextIndex,allValues[j])
            if(temArray.length <= arr.length/2){
                break
            }
        }
        
        if(output[i].length >= arr.length/2){ break}
    }
    let result = output.map(a => a.length)
    return Math.min(...result)
};