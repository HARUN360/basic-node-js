// 1.No: object declaration --------------------->

// 1.1 Object Literal Syntax
// const MyInfo = {
//   name:"MD Harun",
//   department: 'cse',   /* name gulake bola hoi name = property/key */
//   aim:"devolopment",   /* Md Harun gulake bola hoi name = value */
//   age:18,
//   marid:false,
// }
// console.log(MyInfo);



// 1.2 Using the Object Constructor:
// const MyInfo = new Object();
// MyInfo.name = 'MD Harun';
// MyInfo.department = 'cse';
// MyInfo.aim = 'cse';
// MyInfo.age = 18;
// MyInfo.marid = false;
// console.log(MyInfo);


// 1.3 Using a Constructor Function:
// function MyInfo(name, department, aim, age, marid ) {
//  this.name = name;
//  this.department = department;
// this.aim =aim;
// this.age = age;
// this.marid = marid;
// }
// const ShowInfo = new MyInfo('Md Harun or roshid', 'cse', 'as webdevoloper', 18, false)
// console.log(ShowInfo);
// node: besir bag somoi amra Object Literal Syntax dia korbo tobe function lagbe >>>>>>>>>>>>>>


// 2.property and value out pute alada alada vabe dekhate koronia --------------------------------------->
// 2.1 property dekhate:
// const MyInfo = {
//   name:"MD Harun",
//   department: 'cse',   
//   aim:"devolopment",   
//   age:18,
//   marid:false,
// }
// const property = Object.keys(MyInfo); /*Using Object.keys() */
// console.log(property);


// 2.2 property dekhate:
//  const MyInfo = {
//     name:"MD Harun",
//     department: 'cse',   
//     aim:"devolopment",   
//     age:18,
//     marid:false,
//   }
//   for(const property in MyInfo ){ /*Using a for...in loop */
//     console.log(property);
//   }


// 2.3: value output korte:
//  const MyInfo = {
//     name:"MD Harun",
//     department: 'cse',   
//     aim:"devolopment",   
//     age:18,
//     marid:false,
//   };
//   const value = Object.values(MyInfo); /*Using Object.values() */
//  console.log(value);

// for in ongso
// for (let value in MyInfo) {
//   console.log(MyInfo[value]); /*for in loop :akhetre [] ata dite hove but property jonno () ata */
// }
// ----------------------------------------end---------------------------------------->>>>>>>>>>>>>>>>

// 3. nirdisto value dekhte koronia ---------------------------------------------------------------------->
// const MyInfo = {
//   name:"MD Harun",
//   department: 'cse',   
//   aim:"devolopment",   
//   age:18,
//   marid:false,
// }
// console.log(MyInfo.name); /*Using Dot Notation: */
// console.log(MyInfo['department']); /*Using Bracket Notation */

// 4.function dia object templet make korar system:----------------------------------------------------->
// 4.1 Using a Constructor Function:
// function MyInfo(name, department, aim, age, marid ) {
//  this.name = name;
//  this.department = department;
// this.aim =aim;
// this.age = age;
// this.marid = marid;
// }
// const student1 = new MyInfo('Md Harun or roshid', 'cse', 'as webdevoloper', 18, false);
// const student2 = new MyInfo('Md sojib mia', 'cse', 'as webdevoloper', 18, true);
// const student3 = new MyInfo('Md Alomgir mia', 'cse', 'as webdevoloper', 18, false);
// console.log(student2);
// console.log(student1.name);

// 4.2:call korar maddome
// function MyInfo(name, department, aim, age, marid) {
//   this.name = name;
//   this.department = department;
//   this.aim = aim;
//   this.age = age;
//   this.marid = marid;
//   this.display = function () {
//     console.log(this.name);
//     console.log(this.department);
//     console.log(this.aim);
//     console.log(this.age);
//     console.log(this.marid);
//   }
// }
// const student1 = new MyInfo('Md Harun or roshid', 'cse', 'as webdevoloper', 18, false);
// const student2 = new MyInfo('Md sojib mia', 'cse', 'as webdevoloper', 18, true);
// const student3 = new MyInfo('Md Alomgir mia', 'cse', 'as webdevoloper', 18, false);

// student3.display();
// student2.display();
// student1.display();
// ----------------------------------------end-----------------------------------------------------

// 5.object ar betore new value add abong value ar man change korar upay-------------------------->
// let MyInfo = {
//   name:"MD Harun",
//   department: 'cse',   
//   aim:"devolopment",   
//   age:18,
//   marid:false,
// }
// MyInfo.collage = 'sherpur collage';
// MyInfo['year'] = '7semeter';

// // Using Object.assign();
// Object.assign(MyInfo, {gf: 'none',fd:'aminul and fahim'});
// // Using spread syntax (ES6+):
// MyInfo = {...MyInfo, sir:'ahmded ali', home: 'mymensing'}
// console.log(MyInfo);

// object value chang or update
// let MyInfo = {
//     name:"MD Harun",
//     department: 'cse',   
//     aim:"devolopment",   
//     age:18,
//     marid:false,
//   }
// MyInfo.name ='Md sojib khan';
// console.log(MyInfo);

// ----------------------------------------------end---------------------------------------
// 6. duti(2ti) object ak sate korar upay------------------------------------------------->
// const tumi = {name1 :'santo', head:'yes'};
// const ami = {name: 'pranto', love:'yes'};  
// const valo = Object.assign({}, tumi , ami);
// console.log(valo); /*property gulu alada alada hote hove */

// 7.nested ar sokol dap
const collage = {
  name : 'vnc',
  class : ['11','12'],
  events: ['science fair', 'bijoy dibos', '21february'],
  eniqu :{
      color: 'red',
      result:{
          gpa: 5,
          marrid: 'top most married'
      }
  }

}
// console.log(collage.eniqu.color);
// console.log(collage.eniqu.result.gpa);
// // add korte
// collage.events[2] = '16 december'
// console.log(collage.events[2]);
// console.log(collage);

// delete korte jekono property--------------------------->
delete collage.class;
console.log(collage);