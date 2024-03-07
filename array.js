// 1. array make korar syntax:---------------------------------------------------------------------->
// const country = ['bangladeh','srilongka','india','pakistan'];
// console.log(country);

// const numbers = [10,20,30,50,60,70];
// console.log(numbers);
// ---------------------------------------------end-----------------------------------------------------

// 2. array length ber korar upay and nirdisto index ba value ver koro------------------------------------------>
// const country = ['bangladeh','srilongka','india','pakistan'];
// console.log(country.length);
// console.log(country[2]);
// const value = country[3];/**je kono index value dekhte */
// console.log(value);
// country[1]='maldep';/**index man update or change */
// console.log(country);

//3. array te index push pop shift unshift sokol kaj?
// 3.1 push
// const numbers = [12,14,16,18,20,22];
// numbers.push(24);
// numbers.push(26,28);
// console.log(numbers);

// 3.2 unshift:1st theke add kore 
//   const numbers = [12,14,16,18,20,22];
//  numbers.unshift(10);
//  numbers.unshift(6,8);
//  console.log(numbers);

// 3.3 pop
// const friends = ['alomgir', 'sojib','lion','Harun','mama','rasel']
// friends.pop();
// friends.pop();/**push ar khetre last element theke bad jabe */
// console.log(friends);

// 3.4 shift: fist index theke delet kore
// const friends = ['alomgir', 'sojib','lion','Harun','mama','rasel'];
// friends.shift();
// friends.shift();
// console.log(friends);

// 3.5
// const products = [
//     {name:'laptop',price:32000,color:'black'},
//     {name:'keyBord',price:500,color:'black'},
//     {name:'mouse',price:300,color:'silver'},
//     {name:'Monitor',price:6000,color:'red'},
// ];
// const newProduct = {name:'webcam',price:700,brand:'lal'};
// const newProducts = [...products,newProduct];
// console.log(newProducts);
// remove mouse:
// const remaining = products.filter(p => p.name !== 'mouse');
// console.log(remaining);
// -------------------------------------------end-------------------------------------------------------------

// 4. array nirdisto upadan khuje pete?
// const friends = ['alomgir', 'sojib','lion','Harun','mama','rasel'];
// console.log(friends.includes('alomgir'));/**thake output true dekhabe onnothai false */
// console.log(friends.includes('munsi'));
// console.log(friends.indexOf('Harun'));/**value ar index pete indexOf use korte hoi and value oi value na thake index -1 dekhabe */
// ------------------------------------------end------------------------------------------------------------------------

// 5.array check korar uapy:-------------------------------------------------------------------------------------------
// const flouwer = ['shapla','gulap'];
// const food = 'ros o gol l a';
// const num = [];
// const age = 20;
// console.log(Array.isArray(flouwer));
// console.log(Array.isArray(food));
// console.log(Array.isArray(num));
// console.log(Array.isArray(age));
// -------------------------------------------end------------------------------------------------------------------------


// 6. array te loop use-----------------------------------------------------------------------------------------------------
// 6.1 for loop-of:
// const friends = ['alomgir', 'sojib','lion','Harun','mama','rasel'];
// for(const friend of friends){
//     console.log(friend);
// }

// 6.2 for loop:
// const friends = ['alomgir', 'sojib','lion','Harun','mama','rasel'];
// for(let i = 0; i<friends.length; i++){
//     console.log(i);
//     console.log(friends[i]);
// }

// 6.3 while loop:
// const numbers = [20,30,40,50,60,70];
// let i = 0;
// while(i<numbers.length){
//     console.log(i);
//     console.log(numbers[i]);
//     i++
// }

// ----------------------------------------------------------------end----------------------------------------------


// 7. array revers:----------------------------------------------------------------------------------------------->
// 7.1 normal way:
// const numbers = [1,2,3,4,5,6,7,8,9];
// numbers.reverse();
// console.log(numbers);

// 7.2 manualy for-of:
// const numbers = [1,2,3,4,5,6,7,8,9];
// const rev_numbers = [];
// for (const num of numbers){
//     rev_numbers.unshift(num);
// }
// console.log(rev_numbers);

// 7.3 normal forlop use:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const revers_numbers = [];
// for (let i = 0; i<numbers.length; i++){
//     const num = numbers[i];
//     revers_numbers.unshift(num);
// }
// console.log(revers_numbers);


// 7.4 amra jodi lopkei revese kore chalai:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let i = numbers.length - 1; i>=0; i--){
//     const num = numbers[i];
//     console.log(num);
// }

// -----------------------------------------------end------------------------------------------------------

// 8. sortded poddoti: ati 2 pokar (1. Asecnding= A-z, 2.Decending = Z-A);--------------------------------->
// const numbers = [5,2,40,56,10,45,20,1,9];
// const num_asc = numbers.sort(function (a, b){return a -b});
// const num_dsc = numbers.sort(function (a, b){return b - a});
// console.log(num_asc);
// console.log(num_dsc);
// ----------------------------------------------end-------------------------------------------------------

// 9. je kono muhurte array last item dekhte koronia?------------------------------------------------------->
// const num = ['kudu', 'modu', 'sudu'];
//  num[3] = 'nodu';
// console.log(num);
// num.push('todu','kobu');
// console.log(num);
// console.log(num [num.length - 1 ]);/**last item */
// console.log(num.join(' + '));
//---------------------------------------------------end----------------------------------------------------- 


// 10. 2ti araay value aksate dekhate?------------------------------------------------------------------------->
// const x = [10,20,30,40,50];
// const y = [60,70,80,90,100];
// const z = x.concat(y);
// console.log(z);
// const p = [120,240,360]
// const all = x.concat(y,p);
// console.log(all);

// 10.2 flat ar kah:
// const a = [
//     [10,20,30,],
//     [40,50,60,70],
//     [80,90,100]
// ]
// console.log(a);
// console.log(a.flat());
// -------------------------------------------------------end----------------------------------------------
// 11. splice kaj ki?------------------------------------------------------------------------------------->
// 11.1 add:(kuthia theke add hove,koto index theke remove hobe)
// const num = ['korim','akkas','batas','tatas'];
// num.splice(2,1,'hotas','niras');
// console.log(num);


// 11.2 remove:(starnting,ending point)
// const num = ['korim','akkas','batas','tatas'];
// num.splice(1,3);
// console.log(num);

// 11.3 slice method:(suru, seser porer value)
// const num = ['korim','akkas','batas','tatas'];
// const newArray = num.slice(1,3);
// console.log(num);
// console.log(newArray);
// --------------------------------------------------------end-------------------------------------------------------

// 12. 1D array and 2d array
// 12.1 1d(high scrore function maddome ber korar upay )
// function highestScore(scrore){
//   let max = scrore [0];
//   for(let x = 1; x<scrore.length; x++){
//      if(max < scrore[x]){
//         max = scrore[x];
//      }
//   }
//   return max;
// }
// let scrore = [10,20,30,40,35,80,50];
// const maxScore = highestScore(scrore);
// console.log(maxScore);


// 12.2 2D array(amon akti funct toiri koro jekhan theke highscorar ar name output dhekau)?
// function highestRunScore(playeersInfo){
//    var highestScore = playeersInfo[0] [0];
//    var highestScore = playeersInfo[0] [1];

//    for(var x = 1; x<playeersInfo.length; x++){

//     if(highestScore < playeersInfo [x] [1]){
//         highestScore = playeersInfo [x] [1];
//         highestScore = playeersInfo[x] [0];
//     }

//    }
//    return highestScore;

// }
// let playeersInfo = [
//     ['asraful', 15],
//     ['tamim', 55],
//     ['musfic', 6],
//     ['sakib', 5],
// ]
// const num = highestRunScore(playeersInfo);
// console.log(num);


// 13 (array ar value samtion adition avg korar program);
// 13.1 sumation korar khetre?
// function add(num){
//     let sum = 0;
//     for(const number of num){
//         sum = sum + number;
//     }
//     return sum;

// }
// const array = [10,20,30,40,50,60,80];
// const sum = add(array);
// console.log(sum);

// 13.2 array ar odd abong even number alada korar program lekh?
// function oddToEven(nums){
//     let odd = [];
//     let even = [];
//     for(const num of nums ){
//         if(num % 2 === 0){
//             even.push(num);
//         }
//         else{
//             odd.push(num);
//         }
//     }
//     console.log(odd);
//     console.log(even);
// }
// const array = [11,12,13,14,15,16,17,18,19,20];
// oddToEven(array);

// 13.3 array ar pothek value multiplie korte?
// function multi(num){
//     let multiplie = 1;
//     for(const nums of num){
//         multiplie = multiplie * nums;
//     }
//     return multiplie;
// }
// const array = [5,3,2,4];
// const result = multi(array);
// console.log(result);

// 13.4 (array ar gor ba avarage nirnoy)------------------------------------------------------------------------------------->
// function avg(num){
//     let sum = 0;
//     for(const number of num){
//         sum = sum + number;
//     }
//     let count = num.length;
//     const avg = sum / count;
//     console.log('array =', num, ' index number =',  count, ' this is sammation =', sum , ' avarage =', avg); 
// }
// const array = [11,12,13,14,15,16,17,18,19,20];
// avg(array);
// ---------------------------------------------------------------end-----------------------------------------------------------------

// 14.(array ar sobchea largest and minimum value);----------------------------------------------------------------------------------->

 // 14.0 onekgulu songkha theke boro songkha nirnoy?
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

// 14.1 largest
// function largest(num){
//   if(num.length === 0){
//     return 'Array is empty';
//   }
//   let big = Math.max(...num);
//   return big;
// }
// const myArray = [10,20,30,5,12,70];
// const result = largest(myArray);
// console.log(result);

// 14.2 manimum
// function largest(num) {
//     if (num.length === 0) {
//         return 'Array is empty';
//     }
//     let big = Math.min(...num);
//     return big;
// }
// const myArray = [10, 20, 30, 5, 12, 70];
// const result = largest(myArray);
// console.log(result);
// ---------------------------------------------------------end-----------------------------------------------------


// 15.string ar man array te convert------------------------------------------------------------------------------->
// const str = "this is my book. i am reading now.you go to hall";
// const charArray = str.split(''); /**string ar potiti character array hisebe dekhte */
// const wordArray = str.split(' ') /**string ar word ke array hisibe dekhte  */
// console.log(charArray);
// console.log(wordArray);
// ------------------------------------------------------end--------------------------------------------------------