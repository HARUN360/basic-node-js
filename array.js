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

// 7.2 manualy fon-of:
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
const numbers = [5,2,40,56,10,45,20,1,9];
const num_asc = numbers.sort(function (a, b){return a -b});
const num_dsc = numbers.sort(function (a, b){return b - a});
console.log(num_asc);
console.log(num_dsc);

