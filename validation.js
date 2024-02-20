// 1.1 validation:
// function add(x,y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//      return 'thik thak number de';
//     }
 
//      return x +y;
//  }
//  console.log(add(4,5));

// 1.2 object ar khetre
// function details(info){
//    if(typeof info !== 'object'){
//     return 'please enter your object value'
//    }
//    else if(!info.name || !info.age){
//     return 'object must be nedded name and age property';
//    }
//    else if(typeof info.name !== 'string' || typeof info.age !== 'number'){
//     return 'please name for string and age for number value?';
//    }
//    else if (info.age <= 0){
//     return 'plese age number give postive value?'
//    }
//    return info;
// }
// const result = details({name:'Md Harun', age:20})
// console.log(result);
// --------------------------------------------------------------end----------------------------------------------------------------------------
// function getMax(numbers){
//     if(!Array.isArray(numbers)){
//         return 'plese probide a array';
//     }
//     let max = numbers[0];
//     for(let i = 1; i<numbers.length;i++){
//         if(typeof numbers[i] !== 'number'){
//             return 'all value should be number';
//         }
//         else{
//             if(numbers[i] > max){
//                 max = numbers[i];
//             }
//         }
       
//     }
//     return max;
// }
// const highest =  [167, true, 120, 205, 137];
// // const highest =  'hou are you';
// const max = getMax(highest);
// console.log('max value is = ', max);
// --------------------------------------------end---------------------------------------------------------------------------
// 3. anaTovori hisab
// function AnaTovar(ana){
//     if(typeof ana !=='number' || ana <=0 ){
//         return 'please provide a valid integer number'
//     }
//     const vori = ana *0.0625;
//     return vori;
// }
// const value = AnaTovar('k');
// console.log(value);
// -----------------------------------------------end-------------------------------------------------------------------------------

/** 4.  (total khoroch ber koro bibinno item near por);----------------------------------------------------------------------------------
 * 1.singgara--- 7 tk
 * 2.somucha ---10 tk
 * 3.jilapi ---- 15 tk
 */
// function PandCost(singgara,somucha,jilapi){
//   if(typeof singgara !== 'number' || typeof somucha !== 'number' || typeof jilapi !== 'number'){
//     return 'Please provide valid integer number';
//   }else if(singgara < 0 || somucha < 0 || jilapi < 0){
//     return 'All parameters should be positive numbers';

//   }

//   const singgaraPrice = 7;
//   const somuchaPrice = 10;
//   const jilapiPrice = 15;
//   const total = (singgara * singgaraPrice) + (somucha * somuchaPrice ) +(jilapi * jilapiPrice);
//   return total;
// }
// const totalcost = PandCost(5,2,-1);
// console.log(totalcost);
// --------------------------------------------------------end-----------------------------------------------------------------


// 5.picnic tk hisab korar  proram?-------------------------------------------------------------------------------------------
// function PicnicBudget(perticipents){
//   if(typeof perticipents !== 'number' || perticipents < 0){
//     return 'perticipents should be a valid positive number'
//   }else{
//     let first100cost = 0;
//     let second101cost = 0;
//     let remainingcost = 0;
//     let total = 0;

//     if(perticipents <= 100){
//       first100cost = perticipents * 5000;  /**condition onujai (100 ba tar chea kom hole sobar 5k kore lagbe) */
//       return first100cost;
//     }
//     else if (perticipents <= 200 ){ /**100+ thke 200 hole 100 ar jonnei 5k bakider jonno 4k*/
//         first100cost = 5000 * 100;
//         second101cost = (perticipents - 100) * 4000;
//         total = first100cost + second101cost;
//         return total;
//     }else{/**100 jonno 5k, 201-200 jonno 4k, baki sob dite hobe 3k kore */
//       first100cost = 5000 * 100;
//       second101cost = 4000 * 100;
//       remainingcost = (perticipents - 200) * 3000;
//       total = first100cost + second101cost + remainingcost;
//       return total;
//     }
//   }
 
// }
// const result = PicnicBudget(103);
// console.log(result);
// ---------------------------------------------------------------end-------------------------------------------------------
