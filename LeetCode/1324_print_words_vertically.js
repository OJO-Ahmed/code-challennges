/***
1324. Print Words Vertically

Given a string s. Return all the words vertically in the same order in which they appear in s. Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed). Each word would be put on only one column and that in one column there will be only one word.
 
Example 1:
Input: s = "HOW ARE YOU"
Output: ["HAY","ORO","WEU"]
Explanation: Each word is printed vertically. 
 "HAY"
 "ORO"
 "WEU"
Example 2:
Input: s = "TO BE OR NOT TO BE"
Output: ["TBONTB","OEROOE","   T"]
Explanation: Trailing spaces is not allowed. 
"TBONTB"
"OEROOE"
"   T"
Example 3:
Input: s = "CONTEST IS COMING"
Output: ["CIC","OSO","N M","T I","E N","S G","T"]

// Checkout this short python solution
 https://leetcode.com/problems/print-words-vertically/discuss/484284/Python-1-Line-Zip-Longest
***/

===================================
// SOLUTION
===================================

/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let array = s.split(" ")
    let arrayLength = array.length
    let len = array[0] ? array[0].length : 0
    
    let lenArray = [len]
    for(let i = 1; i < arrayLength; i++){
       lenArray.push(array[i].length)
    }
    len = Math.max(...lenArray)
    
    if(arrayLength > len){
       len = arrayLength 
    }
    
    let output = [];
    for(let i = 0; i < len; i++){
        output[i] = array[0][i] ? array[0][i] : " "
        
        for(let j = 1; j < len; j++){
           output[i] += array[j] ? (array[j][i] ? array[j][i] : " ") : " "
        }
    }
    
    for(let i = 0; i < len; i++){
        let index = (len - 1) - i
        if(output[index].trim().length == 0){
            output.splice(index,1)
        }else{
            output[index] = output[index].trimRight()
        }
    }
    return output;
};