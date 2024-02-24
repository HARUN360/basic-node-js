//1. variable about lear--------------------------------------------------------------------->
// var == old,re-decleare,re-assign,global-scoped.
// let = new,cannot re-decleare,re-assign,block-scooped
// const = new,block-scooped,not re-(declear and assign) but array or object value change kora jai;
// --------------------------------------------end-------------------------------------------------

// 1: var------------------------------------------>
// 1.1 re-declaration
// var a = 10;
// var a = 20;
// console.log(a);

// 1.2 re-assgin
// var a = 10;
// a=50;
// console.log(a);

// 1.3 global scooped
// var a = 20;
// function add(){
//     var b = a;
//     console.log(b);;
// }



// 2. let ------------------------------------------------->
// 2.1: nor a re-declaration
// let a = 10;
// let a = 20;
// console.log(a);/**out pur error asbe */

// 2.2 let  re-assign kora jai
// let a = 10;
// a=50;
// console.log(a);

//23.3 it is a block scooped,not a global scooped
// let a = 50;
// function add(){
//     let b = 20;
//     console.log(b); /**ata akhon kaj korbenah */
// }
// add();
// console.log(b);

// function add(){
//     let b = 20;
//     console.log(b); /**ata akhon kaj korbenah */
// }
// add();
// -----------------------------end-------------------------------------------------------
// var variable:
// 1.1 re-declaration
// var a = 10;
// var a = 20;
// console.log(a);

// 1.2 re-assign
// var a = 10;
// a='md harun or roshid'
// console.log(a);

// 1.3 global scooped
// var a = 10;
// {
//     console.log(a);
//     var b = 20;
// }
// console.log(b);

// 1.4 hosted:
// console.log(country);
/**error dekhabenah undefiend dekhabe(ami janina akhane ki ase tobe country neme se var mone mone banabe) */
// var country = 'bangaladesh';
// console.log(country);
// -------------------------------------------------------------end--------------------------------------------------------


// 2.let variable-------------------------------------------------------------------------------------------------------->
// 2.1 not re-declare
// let b = 10;
// let b = 20;/**eroor */
// console.log(b);

// 2.2 re-assign
// let b = 20;
// b = 30;
// console.log(b);

// block scooped(block ar baire atike use kora jabenah but block bairer var gule bitore use kora jabe)
// {
//     let b = 20;
//     b = 30;
// }
// console.log(b);

// not hosted
// console.log(people);
// let people ='shakib khan';/**error dekhabe */
// ---------------------------------------------------end-----------------------------------------------------------------

// 3. const variable------------------------------------------------------------------------------------------------------>
// 3.1 not re-declaration
// const c = 10;
// const c = 20;/**error */
// console.log(c);

// 3.2 not re-assign
// const c = 10;
// c=20;
// console.log(10);

// 3.3 block scooped
// {
//     const b = 20;
//     const c = 21;
//     console.log(c);/**ata kaj korbe */
// }
// // console.log(b)/**ata kaj korbenah */

// 3.4 not hosted:
// console.log(people);
// const people ='shakib khan';/**error dekhabe */