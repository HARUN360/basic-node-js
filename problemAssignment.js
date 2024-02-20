// Problem-01 : Help The Zoo Manager:----------------------------------------------------------------------
// function calculateMoney(ticketSale) {
//     if (typeof ticketSale !== 'number' || ticketSale < 0) {
//         return 'error: “Invalid Number” ticket should be a valid positive number';
//     }
//     const saleTicketPrice = ticketSale * 120;
//     const daruanSelary = 500;
//     const stuffLunch = 8 * 50;
//     const totalCost = daruanSelary + stuffLunch;
//     const totalEarn = saleTicketPrice - totalCost;
//     return totalEarn;
// }
// const profit = calculateMoney(93);
// console.log(profit);
// -------------------------------------------------end-------------------------------------------------------

// Problem-02: Good Name , Bad Name -------------------------------------------------------------------------->
// function checkName(name) {
//     if (typeof name !== 'string') {
//         return 'invalid:please provide a string';
//     }
//     const nameLowerCase = name.toLowerCase();
//     const lastLetter = nameLowerCase[nameLowerCase.length - 1];
//     const goodLastLetter = 'ayieouw';
//     if (goodLastLetter.includes(lastLetter)) {
//         return 'Good Name';
//     }else {
//         return 'Bad Name';
//     }
// }
// const result = checkName('RAFEE');
// console.log(result);
// --------------------------------------------------end------------------------------------------------------

// Problem 03 : Virus in my Array-----------------------------------------------------------------------------
// function deleteInvalids(array) {
//     if (!Array.isArray(array)) {
//         return ' “Invalid Array” please  provide a array';
//     }
//     const newArray = [];
//     for (const arrays of array) {   
//         if (typeof arrays === 'number' && !isNaN(arrays)) {
//             newArray.push(arrays);
//         }
//     }
//     return newArray;
// }
// const arrayValue =[1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// const result = deleteInvalids(arrayValue);
// console.log(result);
// ------------------------------------------------------end---------------------------------------------------



// Problem 04 : Make A Great Password:-------------------------------------------------------------------------
// function password(obj) {
//     if (typeof obj !== 'object') {
//         return 'invalid:please provide an object'
//     }
//     const keys = Object.keys(obj);
//     if (!keys.includes('name') || (!keys.includes('birthYear')) || (!keys.includes('siteName'))) {
//         return 'invalid:participants should be a name,birthYear and siteName'
//     }
//     const birthYearString = obj.birthYear.toString();
//     const birthYearLength = birthYearString.length;
//     if(birthYearLength !== 4){
//         return 'invalid:please provide birthYear 4 digit';
//     }
//     obj.siteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
//     const result = obj.siteName + '#' + obj.name + '@' + obj.birthYear;
//     return result;
// }
// const ob = { name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' }
// const result = password(ob);
// console.log(result);
// -----------------------------------------end--------------------------------------------------------------




// Problem 05 : Monthly Savings of a Freelancer-------------------------------------------------------

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr)) {
        return ' “Invalid input” please  provide a array of first argument';
    } else if (typeof livingCost !== 'number') {
        return ' “Invalid input” please  provide a valid Number of second argument';

    }

    let sum = 0;
    for (const array of arr) {
        sum = sum + array;
    }
    let max = 0;
    for (const num of arr) {
        if (num >= 3000) {
            max = max + num;
        }
    }
    let tax = max * (20 / 100);
    let totalCost = tax + livingCost;
    const result = sum - totalCost;
    if (result >= 0) {
        return `Total Savings = ${result} `;
    } else if (result < 0) {

        return 'earn more';
    }


}

const arrayF = [ 1000 , 2000 , 2500 ];
const value = 5000;
const result = monthlySavings(arrayF, value);
console.log(result);