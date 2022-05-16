'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion

// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]

// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
    // write your code here
    // let newArr=[];
    // let x =int1-int2;
    // if (x==(int1%int2)-int2) {
    //     recursionPattern (x,-int2)
    //     newArr.push(x);
    // }else {
    //     recursionPattern(x,int2)
    //     newArr.push(x);
    // }
    let int3=int1;
    let int4 =int2 ;
    let newArr=[];
    // newArr.push(int1);
    for (let i=0; i<int1/int2 +1; i++) {
    newArr.push(int3);
    int3=int3-int4;
    }
  int3 = int3+int4;
    for (let i = 0; i < int1/int2; i++) {
        int3 = int3+int4;
        newArr.push(int3);
    }
return newArr;
    }
//     function printPattern(n, m, flag)
// {
     
//     // Print m.
//     document.write(m + " ");
 
//     // If we are moving back toward the n and
//     // we have reached there, then we are done
//     if (flag == false && n == m)
//         return;
 
//     // If we are moving toward 0 or negative.
//     if (flag)
//     {
         
//         // If m is greater, then 5, recur with
//         // true flag
//         if (m - 5 > 0)
//             printPattern(n, m - 5, true);
             
//         // Recur with false flag
//         else
//             printPattern(n, m - 5, false);
//     }
     
//     // If flag is false.
//     else
//         printPattern(n, m + 5, false);
// 

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    // write your code here
    let regex =(/[\w\.\$]+(?=com|org|net)\w+/g);
    let result= str.match(regex);
    return result.toString();
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    // write your code here
    let regex=/[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(regex, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };