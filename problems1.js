// 1.inch theke feet convert------------------------------------------------------------------------->
// function inchTofeet(inch){
//     const feet = inch / 12;
//     return feet;
// }
// const shuboHeight = inchTofeet(75);
// console.log(shuboHeight);

// 1.2 inch and feet aksate dekhate
// function inchTofeet2(inch){
//     const feet = inch /12 ;
//     const feetIn = parseInt(feet);
//     const inchVa = inch % 12;
//     const result = feetIn + ' ft ' + inchVa + 'inch';
//     return result;
// }
// const shuba =  inchTofeet2(75);
// console.log(shuba);
// -----------------------------------------------end-------------------------------------------------------


// 2. mile to kilometer-------------------------------------------------------------------------------------->
// function mileTokm(mile){
//    const km = mile * 1.60934;
//    return km;
// }
// const result = mileTokm(10)
// console.log(result);

// 2.2 kilo to mile
// function kmTomile(km){
//     const mile = km * 0.621371;
//     return mile;
//  }
//  const result = kmTomile(10)
//  console.log(result);
// ----------------------------------------------------end--------------------------------------------------------

// 3. leap year ver korar program---------------------------------------------------------------------------------
// 3.1 normal system = (jodi 4 dia divition korle bagses na thake tahole sei year ti holo leapYear):
// function isLeapYear (year){
//     if( year % 4 === 0){
//         return true
//     }
//     else{
//         return false;
//     }
// }
// const leap = isLeapYear(2024);
// console.log(leap);

// 3.2 stander system(je year ti 100 dara bag jainah and 4 dia bag jai seti)
// function inLeapYear(year){
//     if(year % 100 !== 0 && year % 4 === 0){
//         return true;
//     }
//     else if(year % 100 === 0 && year % 400 === 0){
//         return true;
//     }
//     else {
//         return false
//     }

// }
// const leapiApa =  inLeapYear(2000);
// const leapiApa1 =  inLeapYear(2052);
// const leapiApa2 =  inLeapYear(2019);
// const leapiApa3 =  inLeapYear(2300);
// console.log(leapiApa,leapiApa1,leapiApa2,leapiApa3);
// ---------------------------------------------------------end------------------------------------------


//4. function ar maddome array nia,array sokol odd number avg dekhau?--------------------------------------
// function oddAverage(numbers){
//   const odds = []; /**odd number gule akta array te rakhbo */
//   for(const number of numbers){
//    if(number % 2 === 1){
//      odds.push(number)
//    }
//   }
//   console.log(odds);/**ata hosse sudu odd number outpute dekhar jonno */
// let sum = 0;
// for(const numOdd of odds){
//     sum = sum + numOdd;
// }
// const count = odds.length;
// console.log('thi is summatin = ',sum, 'array items = ', count);
// const avg = sum / count;
// return avg;
// }
// const numbers = [42,44,11,50,31,5,15];
// const avg = oddAverage(numbers);
// console.log('Average of the odd numbers = ',avg);

// -------------------------------------------end---------------------------------------------------------------


// 5. array te akoi man ba duplicat value remove?------------------------------------------------------------->
// function noDuplicate(array){
//  const unique = [];
//  for(const item of array){
//     if(unique.includes(item) === false){
//         unique.push(item);
//     }
//  }
//  return unique;
// }
// const biranikhur = ['abul','tabul','abul', 'mokbul','abul', 'tabul'];
// const uniqueArray = noDuplicate(biranikhur);
// console.log(uniqueArray);



// 5.2 array ar akoi man ba duplicate value bad debar upay?
// const num = [10,20,10,20,30,10];
// function duplicate(nums){
//     const unique = [];
//     for(const num of nums){
//         if(unique.includes(num) === false){
//             unique.push(num)
//         }
//     }
//     return unique;
// }
// const value = duplicate(num);
// console.log(value);


// 5.3. array ar duplicate value count korar uapy?
// function countduplicate(numbers) {
//     let duplicate = {};

//         for(const num of numbers) {
//         duplicate[num] = (duplicate[num] || 0) + 1;
//     };
//     return duplicate;
// }

// const numbers = [5, 5, 11, 12,11, 98, 5];
// const duplicate = countduplicate(numbers);
// console.log(duplicate);

// -------------------------------------------end--------------------------------------------------------------

// 6. celsius to fahrenheit converter?------------------------------------------------------------------------>
// 6.1 fahren to celsius
// function cToF(fahrenheit){
//    const value = (fahrenheit - 32)* (5/9) ;     /**(°F − 32) × 5/9 = °C*/
//    const celsius = value.toFixed(2)
//    console.log(celsius, 'C');
// }
// cToF(98.4);

// 6.2 celsius to fahrenheit
// function fahToCel(celsius){
//     const value = (celsius*9/5) + 32;  /**(°C × 9/5) + 32 = °F*/
//     const fahrenheit = value.toFixed(2);
//     console.log(fahrenheit, 'F');
// }
// fahToCel(40);
// -----------------------------------------------end--------------------------------------------------------------
// 7. function bebohar kore highest number ber korar upay?--------------------------------------------------------->
// 7.1 2ti songkhar maje:
// function getMax(num1,num2){
//     if(num1>num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }
// const max = getMax(50,60);
// const max1 = getMax(80,60);
// console.log(max,max1);
// const max2 = getMax(max,max1);
// console.log(max2);

// 7.2: 3ti songkhar maje:
// function getMax(num1,num2,num3){
//     if(num1>num2 && num1>num3){
//         return num1;
//     }
//     else if(num2>num1 && num2>num3){
//         return num2;
//     }
//     else{
//         return num3;
//     }
// }
// const best = getMax(10,30,25);
// console.log(best);

// 7.3 Math function bebohar kore (3ti):
// const max = Math.max(10,30,25);
// console.log(max);

// 7.4 onekgulu songkha theke boro songkha nirnoy?
// const highest = [10,20,30,40,50,66,77,10,25,];
// function getMax(numbers){
  
//     let max = numbers[0];
//     for(const num of numbers){
//         if(num > max){
//             max = num;
//         }
//     }
//     return max;
// }
// const max = getMax(highest);
// console.log('max value is ', max);

// 7.5 task(min ber korar program lekho)

//  7.6.1 : akadik phone theke kom dami phone kinte?
// const praices = [25000,10000,30000,50000,60000,20000,16000];
// function getMax(numbers){
  
//     let min = numbers[0];
//     for(const num of numbers){
//         if(num < min){
//             min = num;
//         }
//     }
//     return min;
// }
// const min = getMax(praices);
// console.log('min value is ', min);


// 7.6.2:(kom dami price ar phoner object khujar upay)?
// const mobiles = [
//     {name:'samsung', price:20000, cemera: '12mp', color: 'black'},
//     {name:'tecno', price:25000, cemera: '10mp', color: 'red'},
//     {name:'xoami', price:28000, cemera: '15mp', color: 'yellow'},
//     {name:'opu', price:10000, cemera: '11mp', color: 'shilber'},
//     {name:'symphony', price:30000, cemera: '20mp', color: 'golden'},
//     {name:'vovo', price:50000, cemera: '25mp', color: 'white'}
// ];

// function getPhone(phones){
//     let min = phones[0];
//     for(const phone of phones){
//        if(phone.price < min.price){
//         min = phone;
//        }
//     }
//     return min;
// }
// const cheap = getPhone(mobiles);
// console.log(cheap);

// 7.6.2 task(dami phone dekhate)?

// -----------------------------------------------------end--------------------------------------------------------------


// 8. 3ti item deuwa ase sei onujai praice hisab koro-------------------------------------------------------------------->
// function woodQuantity (chair,table,bed){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;


//     const allCahirWood =chair * perChairWood;
//     const allTableWood= table * perTableWood;
//     const allBedWood = bed * perBedWood;


//     const totalwood = allCahirWood + allTableWood + allBedWood;
//     return totalwood;
// }
// const total = woodQuantity(5,6,1);
// console.log('wood neded = ', total);

// 8.2 task(shirt = 500,pant =300,shoe = 900)total hisaber akti progarm lekh?

// const products = [
//     {name:'shampu', price:300},
//     {name:'chiruni', price:100},
//     {name:'shirt', price:700},
//     {name:'pant', price:1200},
// ];

// function getShopingtotal(products){
//     let total = 0;
//    for(const product of products){
//     total = total + product.price;
//    }
//    return total;
// }
// const total = getShopingtotal(products);
// console.log(total);

// 8.3( akadik item ar price jug korte hove);
// const products = [
//     {name:'shampu', price:300, quantity: 2},
//     {name:'chiruni', price:100, quantity: 3},
//     {name:'shirt', price:700, quantity: 5},
//     {name:'pant', price:1200, quantity: 1},
// ];
// function getShopingtotal(products){
//     let total = 0;
//    for(const product of products){
//     const pricetotal = product.price * product.quantity;
//     total = total + pricetotal;
//    }
//    return total;
// }
// const total = getShopingtotal(products);
// console.log(total);

// ----------------------------------------------end-------------------------------------------------

// 9.(discount for)----------------------------------------------------------------------------------
// 9.1(100 kinle kono discout nai,100+ kinle 10,200+ hole 30)
// function discount(quentity){
//     if(quentity<=100){
//         const total = quentity  * 100;
//         return total;
//     }
//     else if(quentity <= 200){
//        const total = quentity * 90;
//        return total;
//     }
//     else{
//         const total = quentity * 70;
//         return total;
//     }
// }
// const cost = discount(5);
// console.log(cost);

/**
 * 9.2(multi layer discoutn)
 * first100--->100tk
 * 101To200--->90tk
 * above200--->70
 */
// function layerDiscountTotal(quantity){
//     const first100Price = 100;
//     const second100Price = 90;
//     const above200Price = 70;

//     if(quantity <= 100){
//         const total = quantity * first100Price;
//         return total;
//     }
//     else if(quantity <= 200){
//         const first100Total = 100 * first100Price;
//         const remainingQuantity = quantity - 100;
//         const remainingTotal = remainingQuantity * second100Price;
//         const total = first100Total + remainingTotal;
//         return total;
//     }
//     else{
//         const first100Total = 100 * first100Price;
//         const second100Total = 100 * second100Price;
//         const remainingQuantity = quantity -200;
//         const remainingTotal = remainingQuantity * above200Price;
//         const total = first100Total + second100Total + remainingTotal;
//         return total;
//     }
// }
// const value = layerDiscountTotal(101);
// console.log(value);


// 10.(calculator)
// function add(num1,num2){
//     return num1 + num2;
// }
// function subtract (num1,num2){
//     return num1 - num2;
// }
// function multiply(num1,num2){
//     return num1 * num2;
// }
// function divide(num1,num2){
//     return num1 / num2;
// }

// function calculator(a,b,oparation){
//     if(oparation === 'add'){
//         const result = add(a,b);
//         return result;
//     }
//     else if (oparation === 'subtract'){
//         const result = subtract(a,b);
//         return result;
//     }
//     else if(oparation === 'multiply'){
//         return multiply(a,b);
//     }
//     else if ( oparation === 'divide'){
//         return divide(a,b);
//     }
//     else {
//         return "only 'add', 'subtract','multy','divede' ";
//     }
// }
// const result = calculator(5,7, 'add' );
// console.log(result);

// ------------------------------------------------end-------------------------------------------------

//11.  Write a function to count the number of vowels in a string.-------------------------------------->
// const num = 'tumar num ki';
// function vowelsCount(nums){
//     const vowel = 'aeiouaAEIOU';
//     let count = 0;
//     for(let i = 0; i< nums.length;i++){
//         if(vowel.includes(num[i])){
//               console.log('this is vowel value = ', num[i]);
//             count ++;
//         }
//     }
//     return count;
// }

// const result = vowelsCount(num);
// console.log( 'this is vowel Numbers = ', result);
// --------------------------------------------------end---------------------------------------------------------

//12. random number 10 to 20;------------------------------------------------------------------------------------
// 12.1
// function getRndInteger(min, max) {
//     const resul = Math.floor(Math.random() * (max - min + 1) ) + min;
//     return resul;
//   }
//   const value = getRndInteger(10,20);
//   console.log(value);


// 12.2 (1 theke jodi 5 porjonto hoi);
// function getRndInteger(min, max) {
//     const resul = Math.floor(Math.random()* 5) +1;
//     return resul;
//   }
//   const value = getRndInteger(10,20);
//   console.log(value);
// --------------------------------------------------end-------------------------------------------------------------------

// 13. akadik word ar string theke sobchea boro length ar word print koro?------------------------------------------------->
// function word(num){
//     let max = num[0];
//     for(const nums of num){
//         if(nums.length > max.length){
//             max=nums;
//         }
//     }
//     return max;
    
// }
// let sent = 'I am learning Programming to become a programmer';
// const value = sent.split(' ');
// const result = word(value);
// console.log('this sentence big word = ', result);
// -----------------------------------------------------end---------------------------------------------------------------

// 14. functtion bebohar kore array theke sobchea boro value outpute dekhau?---------------------------------------------->
// const highest =  [167, 190, 120, 205, 137];
// function getMax(numbers){
  
//     let max = numbers[0];
//     for(const num of numbers){
//         if(num > max){
//             max = num;
//         }
//     }
//     return max;
// }
// const max = getMax(highest);
// console.log('max value is = ', max);
// -----------------------------------------------------end-----------------------------------------------------------------


// 8.4(akti array ar bitore akadik object theke price ar avarage nirnoy)?-------------------------------------------------------------------->
// function findAveragePhonePrice(nums) {
//     let priceArray = [];
//     for (const num of nums) {
//         priceArray.push(num.price);
//     }
//     console.log('phone price = ', priceArray);
//     let sum = 0;
//     for (const price of priceArray) {
//         sum = sum + price;
//     }
//     const count = priceArray.length;
//     console.log('sammmation the phone total price = ', sum, ' arount phone = ', count);
//     const result = sum / count;
//     return result;
// }
// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 9000 },
//     { model: "PhoneB", brand: "Samsung", price: 1000 },
//     { model: "PhoneC", brand: "Oppo", price: 2000 },
//     { model: "PhoneD", brand: "Nokia", price: 3000 },
//     { model: "PhoneE", brand: "Iphone", price: 5000 },
//     { model: "PhoneF", brand: "HTC", price: 10000 },
// ];
// const avgPrice = findAveragePhonePrice(phones);
// console.log(' this is price avg of this array phone price = ', avgPrice);
// --------------------------------------------------------------end-------------------------------------------------------------------------------------------


// 16.array ti increment and year hobe multiple and tar sate bortoman salaru sammation hobe.tarpor tatal summation?----------->
// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];
// function peresentSalary(salarys){
//     let emplySelaryTotal = [];/**pottek employ total selary akhane joma hobe */
//     let total = [];/**company total employ cost atate hobe */
//     for(const salary of salarys){
//        const multi = salary.experience * salary.increment;
//        const total = multi + salary.starting;
//        emplySelaryTotal.push(total);
//     }
//     console.log('employselary = ', emplySelaryTotal);
//     let sum = 0;
//     for(const employees of emplySelaryTotal){
//         sum = sum + employees;
//     }
//     return sum;  
// }
// const result = peresentSalary(employees);
// console.log( 'compmani total employcost = ', result);
// -------------------------------------------------------------end-------------------------------------------------