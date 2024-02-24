// 1.forEach about------------------------------------------------------------------------------------
// 1.1
// const numbers = [10,20,30,40,50,70];
// numbers.forEach(myFunction);  /**atate function name dite hobe */
// function myFunction(x){
//     console.log(x);
// } 

// 1.2
// const numbers = [10,20,30,40,50,70];
// numbers.forEach(function(x){ /**akhane function name dorkar nei */
//     console.log(x);
// } );


// 2.array value square kore new array make:----------------------------------------------------------------------------------->
// const numbers = [10,20,30,40,50,70];
// const square = [];
// numbers.forEach(function(x){
//     square.push(x * x);
// } );
// console.log(square);

// 3.array index ar sathe +5 korar program?-------------------------------------------------------------------------------------->
// const numbers = [10,20,30,40,50,70];
// numbers.forEach(function(x,index,arr){ /**x=aktar por akta array value; index = array pottek indes; arra = total array */
//     arr[index] = x + 5;
// } );
// console.log(numbers);
// -----------------------------------------------------anisul end-----------------------------------------------------------------


// -----------------------------------------------------school of skills---------------------------------------------------------

// 1. array 1 value ke replace kore 3 koro [1,2,1] = [3,2,3]---------------------------------------------------------------------
// function arrayReplace(inputArray,replace,add){
//     inputArray.forEach ((element,index) => {
// if(element === replace){
//     inputArray[index] =  add;
// }
//     });
//     console.log(inputArray);
// } 
// arrayReplace([1,2,1],1,3);

const numbers = [10,20,30,40,50,70];
const square = [];
numbers.forEach(function(x){
    if(x===10){
        x=5;
    }
} );
console.log(square);