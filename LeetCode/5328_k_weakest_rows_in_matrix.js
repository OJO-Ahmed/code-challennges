/***
5328. The K Weakest Rows in a Matrix

Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

 

Example 1:

Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 2 
row 1 -> 4 
row 2 -> 1 
row 3 -> 2 
row 4 -> 5 
Rows ordered from the weakest to the strongest are [2,0,3,1,4]
Example 2:

Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers for each row is: 
row 0 -> 1 
row 1 -> 4 
row 2 -> 1 
row 3 -> 1 
Rows ordered from the weakest to the strongest are [0,2,3,1]
 

Constraints:

m == mat.length
n == mat[i].length
2 <= n, m <= 100
1 <= k <= m
matrix[i][j] is either 0 or 1.
***/

// SOLUTION

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let output = [];
    for(let i = 0; i < mat.length; i++){
        let soldier = numSoldier(mat[i])
        output.push({key:i, soldier: soldier})
    }
    output.sort((a,b) => {
        let x = a.soldier
        let y = b.soldier
        let m = a.key
        let n = b.key
        
        if(x < y){return -1;}
        if (x > y) {return 1;}
        if(x == y && m > n) {return 1;}
        if(x == y && m < n) {return -1;}
        return 0
        })
    let result = []
    for(let i = 0; i < output.length; i++){
        result.push(output[i].key)
    }
    result.splice(k)
    return result
};

function numSoldier(arr){
    let counter = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 1){
            counter++
        }
    }
    return counter
}