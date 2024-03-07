// 0: js holo dynamic type language
//1. variable about lear--------------------------------------------------------------------->
// var == old,re-decleare,re-assign,global-scoped.
// let = new,cannot re-decleare,re-assign,block-scooped
// const = new,block-scooped,not re-(declear and assign) but array or object value change kora jai;
// --------------------------------------------end-------------------------------------------------

// 2.default parameter---------------------------------------------------------------------------->
// function add(num1=99,num2=0){         /**defolt man argument asle agula kaj korbenah noito arai kaj korbe */
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result;
// }
// const sum = add(5,7);
// const sum1 = add(5);

// //  array jonno defolt valu hobe array=[];
// function friends (names =[]){

// }
// // object ar jonno
// function flower(names = {}){
    
// }
// --------------------------------------------------end-------------------------------------------------------


// 3. template string---------------------------------------------------------------------------------------->
// backtick maddome ati make kora hoi.
// const a = 10;
// const b = 20;
// const math = `the sum of ${a} and ${b} is = ${a+b}`;
// console.log(math);

// breck sohojei kora jai
// const chalange = `tumar nam suborna.
// tumake ami khuboi miss kori.
// maje maje tumar sathe dekha hole khuboi valo lage.`;
// console.log(chalange);
// -----------------------------------------------------------end---------------------------------------------------------------


// 4.arrow function and others function defference--------------------------------------------------------------------------------->
// 4.1 declaration function  
// function add(a,b){
//     const sum = a + b;
//     return sum;
// }
// const result = add(10,20);
// console.log(result);

//4.2 expression function(function ke akti variable modde rakha hoi,oi variable diai call kor hoi); 
// const add = function(a,b){
//     return a + b;
// }
// const result = add(10,20);
// console.log(result);

// 4.3 arrow function here(var=parameter=>kaj ba function body)
// const add = (x,y) => {
//     return x + y;
// }
// console.log(add(5,10));
// 4.3.1
// const add = (a,b) => a + b;
// const result = add(10,20);
// console.log(result);

// 4.3.2(akadik parameter akadik oparation)
// const add2 = (a,b,c,d,e,f) => a + b + c + d + e + f;
// const result2 = add2(10,20,20,5,5,40);
// console.log(result2);
 

// large arrow function
// const doMathe = (x,y,z)=> {
//     const sum = x+y+z;
//     const multy = x*y*z;
//     return sum + multy;
// }
// console.log(doMathe(2,2,2));

//4.3.3 (object ar jonno)
// const getAge = (person) => person.age;
// const student = {name:'harun', age:20};
// const result = getAge(student);
// console.log(result);

//4.3.4 (array for)
// const getThird = Number => Number[3]; /**baket dileu ho na dileu ho single parameter jonno */
// const third = getThird([10,20,30,50]);
// console.log(third);


// 4.3.5 no perameter 
// const getPI = () => Math.PI;
// console.log(getPI());
// -------------------------------------------------------end--------------------------------------------------


// 5. destructuring(jekono jaigar value pete ati use kora hoi)---------------------------------------------------------------->
// const actor = {
//     name: 'ananata',
//     age: 30,
//     phone: '01356464651',
// }
// // const phone = actor.phone;/**Normal rules */
// // console.log(phone);
// const {phone} = actor;/**destructuring rules */
// console.log(phone);
// const {age , name} = actor;
// console.log(age,name);
// const {age: boys} = actor; /**variable set (boys) */
// console.log(boys);

// 5.1(power of spread use destructuring)
// const nums = [3,5,2,4,6,8,5,41];
// const [a,b,c,...d] = nums;
// console.log(a,b,c,d);


//5.2 array destructuring
// const numbers =[45,99];
// const [first,second] = numbers;
// console.log('this is a first num = ',first);

// 5.3
// const person = {
//     name: 'hero alom',
//     age:34,
//     address:{
//         zilla:'rajsahi',
//         village:'komunah'
//     }
// }
// // const {age,address}= person;
// // const {zilla} = address;
// const {address:{zilla}} = person;
// console.log(zilla);

// array function use:
// function doubleThem (a,b){
//     return [a*2,b*2];
// }
// const [a,b] = doubleThem(6,9);
// console.log(a);
// console.log(b);

// 5.4-->
// const employee = {
//     id:'vs code',
//     designation:"developer",
//     machine:"mac",
//     languages: ["html","css", 'js'],
//     specification:{
//         height: 5.6,
//         weight:55,
//         addres:'Jamalpur',
//         drink:'water',
//         watch:{
//             color: 'black',
//             price:1250,
//             brand:'garmani'
//         }
//     }
// }
// const {machine,id} = employee;
// console.log(machine,id);
// const {height,weight,drink} = employee.specification;
// console.log(height,'+',weight,'+',drink);
// const [html] = employee.languages;
// console.log(html);
// const {brand} = employee.specification.watch;

// ---------------------------------------------------end-----------------------------------------------------

// 6.spread operator------------------------------------------------------------------------------------------>
// const numbers = [10,20,470,52,4,44];
// console.log(numbers);/**normal way */
// console.log(...numbers);/**spread way */
// const arrayMax = Math.max(...numbers);
// console.log(arrayMax);
// const addValue = [...numbers,50];
// console.log(addValue);

// 6.1
// const number = [2,4,6];
// const num1 = [...number]; /**ager array ager motoi thakbe num1 hobe new array*/
// number.push(10);
// num1.push(20);
// console.log(number,num1);

// 6.2 object a use?
// const person  = {
//     name : 'Hero Alom',
//     age : 34,
//     address: 'bari nai',
//     p: [0,1,2,3,1,4],
// }
// const personal = {...person};
// personal.email = 'hero@gamil.com';
// console.log(person);
// console.log(personal);
//7. object ar new tools------------------------------------------------------------------------------------------->
// const glass = {
//     name:'glass',
//     color:'golden',
//     price:12,
//     isCleaned: true
// }
// console.log(glass);
// const key = Object.keys(glass);/**keys debe */
// console.log(key);
// const value = Object.values(glass);/**value deve */
// console.log(value);
// // array or array or two dimantion array
// const entries = Object.entries(glass);/**array tarpor bitore array debe */
// console.log(entries);


// remove system
// delete glass.isCleaned;
// console.log(glass);
// const  {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// freeze korle object ar kono kisu change kora jabenah
// Object.freeze(glass);
// glass.price = 555;
// console.log(glass);
// ---------------------------------------------end-------------------------------------------------------------------------


// 8 map somporke darona--------------------------------------------------------------------------------------------------->
// array value 2digun?
// const number = [10,20,30,40,50];
// const doubled = [];
// for(const num of number){ /**normal way */
//     const double = num *2;
//     doubled.push(double);
// }
// console.log(doubled);

// map way(puraton array ke modifi an kore new array make kore, ata dara return kora jai)
// 8.1-------?
// const number = [10,20,30,40,50];
// function doubleIt(num){
//     console.log('num now', num);
//     return num *2;
// }
// const result = number.map(doubleIt);
// console.log(result);

// 8.2 arrow function?
// const number = [10,20,30,40,50];
// const output = number.map(n => n * 2);
// console.log(output);


// 8.3 object ar length and first latter ber korte
// const friends = ['sojib', 'barek', 'kuddus', 'nambihin'];
// const lengths = friends.map(fd => fd.length);
// const fristLatter = friends.map(fd => fd[0]);
// console.log(lengths);
// console.log(fristLatter);


// 8.4:item,index,array dekhte
// const nums = [10,20,70,50,60,40];
// nums.map((item,index,arra) => {
//     console.log('item = ',item, 'index = ', index, 'array = ', arra );
// });
// -----------------------------------------------------------------end----------------------------------------------------------------------

//9. forEach (ata dara return kora jai, sudu oi arry ke pete)----------------------------------------------------------------------------->
// const numbers = [1,2,5,3,4,65,22];
// const result = numbers.forEach(n => console.log(n));
// console.log(result); 

// 9.2--?
// const products = [
//     {name:'laptop',price:32000,color:'black'},
//     {name:'keyBord',price:500,color:'black'},
//     {name:'mouse',price:300,color:'silver'},
//     {name:'Monitor',price:6000,color:'red'},
// ];
// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.name));
// 10. chain nia daronah (protik =? )----------------------------------------------------------------------------------------------------->
// data access process normal way---?
// const data = [{id:1,name:'abul',address:'khucu khet'}];
// console.log(data[0].address);/**address value dekhate */
// const products = {
//     count: 5000,
//     data:[
//         {id:1,name:'lenovo laptop', price:65000},
//         {id:2,name:'macbook', price:165000},/**ai price dekhte */
//     ]
// }
// console.log(products.data[1].price);

// 10.1 chain ar kaj
// soriful rajer street second positon ber koro?
// const user ={
//     id:5001,
//     name:'shoriful raj',
//     addres:{
//         street:{
//             frist:'54/1 uttora side',
//             second: 'poribag ar goli',
//             third: 'no dorai'
//         },
//         city:'dhaka'
//     }
// }
// console.log(user.addres.street.frist?.second);/**error devenah ? thaker jonno(chaine) */
// console.log(user.addres.street.second);
// -------------------------------------------------end--------------------------------------------------------------------------

// 11. filter and find-------------------------------------------------------------------------------------------------------------->
// 11.1 filer (condition maddobe bachai kore)-?
// const players = [75,65,72,55,59];
// const selected = players.filter(p => p>60);
// const selected = players.filter(p => p % 2 === 1);/**odd number */
// console.log(selected);

// 11.1.2 array index ar 4 length ar upore print korbe-?
// const friends = ['tom', 'alomgir', 'ohi', 'jusnah'];
// const oddFrieds = friends.filter(fd => fd.length > 4);
// console.log(oddFrieds);

// 11.2 find(condition true holei just akta value output korbe).
// const players = [75,65,72,55,59];
// // const selected = players.find(p => p > 10);
// const selected = players.find(p => p > 100); /**undifind dekhabe output */
// console.log(selected);

// 11.2.2
// const nums = [10,20,30,40];
// const x = nums.find(item => item === 30);
// const x = nums.find(item => item === 33);/**condition false hole undifend deve */
// console.log(x);
// ------------------------------------------------------end----------------------------------------------------------------------------

// 12. reduce(2ta parameter, initialization value) ------------------------------------------------------------------------------------>
// const numbers = [4,6,5,6,9];
// const total = numbers.reduce((previous, current) => previous + current,0)
// console.log(total);

// 13. class(object ar moto property and value(mathod)tahke)-------------------------------------------------------------------------->
// 0. syntax: class Name{.......} var = new Name();
// class Animal {
//     name = 'tiger';
//     color = 'silver'
// }
// const cat = new Animal();
// // console.log(cat);
// console.log(cat.name);


// 13.1
// class Product{
//     coutry = 'bangladehs';
//     constructor(name){
//         this.name = name;
//     }
//   speak(talk){
//     console.log(`talking about ${talk}`);
//   }
// }
// const lenovo = new Product('md harun or roshid');
// lenovo.speak('tumi koto nah sundor');
// console.log(lenovo);


// 13.2 teachers 
// class Teacher{
//     constructor(name,subjuct){
//         this.name = name;
//         this.subjuct = subjuct;
//     }
//     lecture(){
//        console.log('sir is teaching math');
//     }
// }
// const topu = new Teacher('Munnaf', 'chemestry');
// console.log(topu);
// const barke = new Teacher('barek sir', 'Math');
// console.log(barke);


// 13.3 baitre theke value set korte
// class Animal{
//     // name; /**ata na lekhleu hobe */
//     // color;
//     constructor(petName,PetColor){
//         this.name = petName;
//         this.color = PetColor
//     }
// }
// const cat = new Animal('travis', 'white');
// const dog = new Animal('tom', 'black');
// console.log(cat);
// console.log(cat.color);
// console.log(dog.color);

// 13.4 method use
// class Animal{
//     constructor(petName,PetColor){
//         this.name = petName;
//         this.color = PetColor
//     }
//     showInfo(){
//         console.log(`my pet name is ${this.name} and color is ${this.color}`);
//     }
// }
// const cat = new Animal('travis', 'white');
// const cow = new Animal('hamba', 'gray');
// cat.showInfo();
// cow.showInfo();
// ---------------------------------------------------end-----------------------------------------------------------------------------
// 14. enheritane--------------------------------------------------------------------------------------------------------------------->
//  class Owenr{
//     owenerName = 'mahady';
//     owenerAge = 26;
//     owenerInfo(){
//         console.log(`owerNmae: ${this.owenerName}. owenerAge = ${this.owenerAge}`);
//     }
//  }

//  class Animal extends Owenr{               /**derived class(atai enheritane) */
//     constructor(petName,PetColor){
//         super()                         /**super():class Owenr ke call kora ba kaj korar jonno ati use  */
//         this.name = petName;
//         this.color = PetColor
//     }
//     showInfo(){
//         console.log(`my pet name is ${this.name} and color is ${this.color}`);
//     }
// }
// const cat = new Animal('travis', 'white');
// cat.showInfo();
// cat.owenerInfo();
// 15. truthy and false value--------------------------------------------------------------------------------------------------------->
/**
 Truthy:
 1.true
 2.any number(+ve,-ve) will be truthy other than 0;
 3.any string and other than emty(' ') string is a truthy;
 4.object and empty oject are truthy
 5.array and empty array

 Falsy:
 1.false
 2.0
 3.''(empty string falsy)
 4.undefined
 5.Null
 6.NaN
 */

//  const x = 5;
//  if(x){
//      console.log('value of x is truthy');
//  }
//  else{
//      console.log('value of x is falsy');
//  }

//  sohoj way(clg(!!name))--?
// const value = '';
// console.log(!!value);
// ---------------------------------------------------------------end-----------------------------------------------------------------------


//accesing object------------------------------------------------------------------------------------------------------------------------->
// const person ={
//     name: 'ablul',
//     age:23,
//     contact:{
//         phone:'01456125544',
//         email: 'abul@gamil.com',
//     },
//     education:{
//         schoolName:'kamarChor high school',
//         subject:[
//             {name: 'bangla', mark:45},
//             {name: 'english', mark:55},
//             {name: 'math', mark:77},
//         ]
//     }
// } 
// // email
// console.log(person.contact.email);
// // english mark
// console.log(person.education.subject[1].mark);
// ------------------------------------------------------------end-------------------------------------------------------------------------


// 17.-------------------------------------------------------------------------------------------------------------------------------------->
/**
 scope 3 doroner hoi?
 1.global scope:ati sokol use korte pare,({} ar baire ja kisu lekha hoi tai global scope)
 2.block scope:  ati {} moddei thakbe
 3.local scope or function scope:function ar betorei ati hoi(ar betore var baire use kora javenah)
 */


//  18: callBy abd callback------------------------------------------------------------------------------------------------------------>
// callby:---->
// premiteve: value nibe,purono value ke oivavei rakhbe
// non-premitive: sompurno array ba object ke nibe and all array ba object change kore felbe
// let a = 5;
// let y = [1,2,3,5];
// const modify = (a) => {
//     a = a + 2;
//     console.log(a);
// }
// modify(a);
// console.log(a);
// const modify1 = (b) => {
//     b.push(22);
//     console.log(b);
// }
//  modify1(y);
// console.log(y);


// callback---------->
// 18.2
// function show(){
//     console.log('mahadi hasan');
// }
// function fun1(age, callback){
//     console.log('my age is = ', age);
//     callback();
// }
// fun1(20,show);

// 18.3
// function show(name,age){
//     console.log('my names is = ', name, ', age is = ',age);
// }
// function fun1(name,age, callback){
//     console.log('hello form first function');
//     setTimeout(() => {/** ai output 2s pore dekhanur jonno */
//         callback(name,age);
//     },2000)
// }
// fun1('MD HARUN',20,show);
// -------------------------------------------------------end-----------------------------------------------------------------------------


//19. closure (akti function betore arekta function thakbe 1st function value dore rakhbe)------------------------------------------------>
// 19.1
// function kitchen(){
//     let roast = 0;
//     return function(){
//         roast++;
//         return roast;
//     }
// }
// const firstServer = kitchen();
// console.log(firstServer);
// console.log(firstServer());
// console.log(firstServer());

// 19.2
// const outerFunction = () => {
//     let count = 0;
//     const inner = () => {
//         count ++;
//         console.log('count:', count);
//     }
//     return inner;
// }
// const x = outerFunction();
// const x1 = outerFunction();
// x();
// x();
// x1();
// x1();
// x1();
// -----------------------------------------------------------end---------------------------------------------------------------------------
// 20 json format (api)------------------------------------------------------------------------------------------------------------->
// const loadComments = () => {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then (data => console.log(data))
    
// }
// loadComments();



// // atai besi bebohito hobe
// const loadCommetn2 = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/comments')
//     const data = await res.json(); 
//     console.log(data);
// }
// loadCommetn2();

// 20.1
// const student ={
//     name:'sakib khan',
//     age:32,
//     movies:['king khan','dhakar mastan']
// }
// const studentJSON = JSON.stringify(student);
// // console.log(student);
// console.log(studentJSON);/**string akare asbe sobkisu */
// const studentObject = JSON.parse(studentJSON);
// console.log(studentObject);
// ---------------------------------------------------end------------------------------------------------------

// 21 ternary operator----------------------------------------------------------------------------------------------->
// const money = 200;
// let food = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food);
// const myVar = 50;
// let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);


// 22: others resourse----------------------------------------------------------------------------------------------------->
// number To string convart shortcut
// const num = 52;
// const numStr = num + ' ';
// console.log(typeof numStr);

// string to number
// const input = "560";
// const inputNum = +input;
// console.log(inputNum);

// truthy and falsi
// const  isActive = true;
// const  isActive = false;
// const showUser = () => console.log('display User');
// const hideUser = () => console.log('hide User');
// // isActive ? showUser() : hideUser();
// // two condition
// // isActive && showUser();
// isActive || showUser();