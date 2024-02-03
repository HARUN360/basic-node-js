// 1. function declaration--------------------------------------------------->
// function Harun(){
//     console.log('plese aktu porasuna kor');
//     console.log('besi tantion koris nah');
//     console.log('sunner(0) chea ak(1) boro');
// }
// Harun();
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
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(110));