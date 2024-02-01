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
function MyInfo(name, department, aim, age, marid ) {
 this.name = name;
 this.department = department;
this.aim =aim;
this.age = age;
this.marid = marid;
}
const ShowInfo = new MyInfo('Md Harun or roshid', 'cse', 'as webdevoloper', 18, false)
console.log(ShowInfo);