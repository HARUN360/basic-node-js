// 1. function declaration--------------------------------------------------->
// function Harun(){
//     console.log('plese aktu porasuna kor');
//     console.log('besi tantion koris nah');
//     console.log('sunner(0) chea ak(1) boro');
// }
// Harun();

 
// 1.2 array function:procuder 
//   let add = (x,y) => x + y;
//   console.log(add(5,6));
// -------------------------------------end-----------------------------------------

// 2. function a parameter pass korar system------------------------------------->
// 2.1 Square korar system paramiter pass kore?
// function square(number){
//     console.log('this is parameter value', number);
//     const borgo = number*number;
//     console.log('square of parameter value', borgo);
// }
// square(5);
// square(10);
// square(11);
// square(214);

// 2.2 two number summation korar poddoti paramer dia?
// function sum(num1,num2){
//     console.log('this is two number = ', num1,' + ',num2);
//     const jugfol = num1+num2;
//     console.log('this is  sammation results= ', jugfol);
// }
// sum(10,20);
// sum(80,110);
// sum(10,5021);
// sum(10451,1050);

// 2.3 difference ba addition ber korar upay?
// function difference(num1,num2){
//     const diff = num1 -num2;
//     console.log(num1, ' - ' ,num2, ' = ', diff);
// }
// difference(100,20);
// // var nia parameter pass:
// const fatherAge = 40;
// const myAge = 20;
// difference(fatherAge,myAge);

//  2.4 parameter charecter maddome pass koarar upay?
// function sizedString(str){
//     const size = str.length;
//     console.log(str, size);
//     if(size%2 === 0){
//         console.log('even size');
       
//     }
//     else{
//         console.log('odd size');
        
//     }
// }
// sizedString('daka');
// sizedString('borishal');




// ------------------------------------end---------------------------------

// 3. function return korar poddoti---------------------------------------------------------------------->
// 3.1 koro akta songkhar 10 gun program?
// function tenTimes (number){
//     const result = number * 10 ;
//     return result;     /* return pore je code lekha hok kono tai kah korbenah */
// }
// const output = tenTimes(5); /*return ar man obbosoi kono var rakhte hobe */
// console.log('output', output);

// 3.2 sortcut niam: 2ti value summation?
// function add(price1,price2){
//     return price1 + price2;
// }
// const bill = add(40,20);
// console.log(bill);

// 3.3 doMath?
// function doMath(num1,num2){
//     const sum = num1 + num2;
//     const diff = num1 - num2;
//     const multiply = num1 * num2;
//     const result = multiply / 2;
//     return result;
// }
// const result = doMath(10,5);
// console.log(result);

// 3.4 ( condition return js ) important: odd number naki even number?
// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(5));
// console.log(isEven(110));

// 3.5 sortcut condition?
// function isodd(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     return false;
// }
// console.log(isodd(10));
// console.log(isodd(59));


// 3.6 double jodi true hoi tobe nummber double hobe, onnotai tripol hobe:
// function doubleOrtriple(number, doDouble){
//     if(doDouble === true){
//       const result = number *2;
//       return result;
//     }
//     else {
//       const result = number * 3;
//       return result
//     }
//   }
//   console.log(doubleOrtriple(5, true));
//   console.log(doubleOrtriple(5, false));

// 3.7:array dia kaj korar upay?
// function numberOfElements(number){
//  const len = number.length;
//  return len;

// }
// const array = numberOfElements([10,2,5,45,21,21,22,10]);
// console.log(array);


// 3.8 array sokol index ar jugfol ber korar upay?
// function sumOfNumber(number){
//     let sum = 0;
//  for(const numbers of number){
//     console.log(numbers);
//     sum = sum + numbers;
//  }
//  return sum;
// }
// const nums = [54,55,21,2212,21,20]
// const sum =sumOfNumber(nums)
// console.log('sum of number is ', sum); /**return ar pore kisu na lekhle out hisabe undifined asbe */


// 3.9 even numburgulu ber  koro?
// function evenNumberOnly(numbers){
//     const evens = [];
//     for(const number of numbers){
//         if(number % 2 === 0){
//              console.log(number);
//              evens.push(number);
           
//         }
       
//     }
//     return evens;
// }
// const numbers = [10,20,31,40];
// const even = evenNumberOnly(numbers);
// console.log('even number are = ', even);

// 3.10: summation odd numbers-----
function evenNumberOnly(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
             console.log(number);
             sum = sum + number;
           
        }
       
    }
    return sum;
}
const numbers = [50,20,31,40];
const even = evenNumberOnly(numbers);
console.log('even number are = ', even);