//console.log('THE PROCESS IS MORE IMPORTANT THAN THE RESULT [# TRUST THE PROCESS] ')
// vaishnu_rm

// Variable Types - let, var, const
// Data Types = string, number, boolean, null, undefined, array, object
// arithmatic operators - + , - , * , / , %, **, ++, -,
// comparison operators = ==, ===, !=, !==, >, <, >=, <=,
// bitwise operators = &, |,
// logical operators = &&, ||, !,
//-------------------------------------------------------------------------------------------------------------------------------------

// OBJECTS:---

// let person={
//     fname:"vaishnu",
//     age : 20,
//     address : "318-Ayangudi,Rayavaram,Thirumayam,Pudukottai",
//     Ph_number: 9943982023,
//     email : "vaishnu@gmail.com",
//     isMarried : false,
// };
// person.qualification = "B.COM";  //adding a oject//
// person.age = 21; // changing value //
// console.log(person);
// console.log(address);
// console.log(person.fname);
// console.log(typeof person.isMarried);
// console.log(person.address);

//---------------------------------------------------------------------------------------------------------------------------------------

// ARRAY:---

// let brands =["TVS-50","XL-50","XL-100","CT100","RX-100","RX-135"]
// brands[0]="mandaya" // replace or changing value

// // brands[10]="MT-50"
// console.log(brands[0]);
// // console.log(brands[6]);
// console.log(brands[10]);
// console.log(typeof brands)
// console.log(brands.length);

//---------------------------------------------------------------------------------------------------------------------------------------

//STRING:---

// let Name="vaishnu";
// let qualification = "B.COM(BANKING AND INSURANCE )";
// let college = "Kongu Arts And Science College , Erode";
// let school = "Kendriya Visyalaya Cecri Campus Karaikudi"
// let passion = "Wandderlust"
// let phonenumber = 9943982023;

// console.log(Name);
// console.log(Name,qualification,college,school,passion,phonenumber);
// console.log(" Hello all myself " + Name + " and i have completed my "+ qualification +" in "+college +
//      " and i have completed my schooling in " + school +" and im " + passion + " and youb can contact me through " + phonenumber);

//---------------------------------------------------------------------------------------------------------------------------------------

//  hour 0 to 12 good morning
//  hour 13 to 17 good afternoom
//  hour 18 to 24 good night

// let hour = 20;

// if(hour <= 12 && hour >=0 ){
//     console.log("Good Morning");
// }
// else if(hour <= 17 && hour >=13){
//     console.log("Good Afternoon");
// }
// else if(hour <=24 && hour >=18){
//     console.log("Good Night");
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let marks= 27

// switch(true){
//     case marks >= 90:
//         console.log("A+");
//         break;
//     case marks >= 80:
//         console.log("A");
//         break;
//     case marks >= 70:
//         console.log("B+");
//         break;
//     case marks >= 60:
//         console.log("B");
//         break;
//     case marks >= 50:
//         console.log("C+");
//         break;
//     case marks >= 40 :
//         console.log("C");
//         break;
//     case marks >= 31 :
//         console.log("d+");
//         break;
//    case marks <= 30:
//         console.log("D_fail");
//         break;
//     default:
//         console.log("Invalid Marks");
// }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

//=========================================================================================================
// for(let i = 1; i <= 5; i++)
// (let j = 1; i <= j; j++){
//     console.log(i);
// }
// let mark = 2;
// function Name(){
// let mark = 1;
// do{
//     console.log(mark);
//     mark++;
// }
// while(mark <= 5);

// }
// Name()

//=========================================================================================================
//call back function

// const vishal =()=>{

//     do{
//         console.log(mark);
//         mark++;
//     }
//     while(mark <= 5);
// }
// vishal()
// for(){

//========================================================================================================================

// function Triangle() {

// for (let i = 1; i <= 5; i++) {
//     let row = '';

//     for (let j = 1; j <= 5 - i; j++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= i * 2 - 1; k++) {
//         row += '*';
//     }
//     console.log(row);
// }
// }
// Triangle();

//=========================================================================================================
// function InvertedTriangle() {

// for (let i = 5; i >= 1; i--) {
//         let row = '';

//             // 5 >= 1 //  true
//             // 4 >= 1 //  true
//             // 3 >= 1 //  true
//             // 2 >= 1 //  true
//             // 1 >= 1 //  true
//             // 0 >= 1 //  false

//     for (let j = 1; j <= 5- i; j++) {

//                 // 1 <= 5 - 1 // 1 <= 4 // true apo 1 space print
//                 // 2 <= 5 - 1 // 2 <= 4 // true apo 2 space print
//                 // 3 <= 5 - 1 // 3 <= 4 // true apo 3 space print
//                 // 4 <= 5 - 1 // 4 <= 4 // true apo 4 space print

//         row += ' ';
// }
//     for (let k = 1; k <= i * 2 - 1; k++) {

//                 // 1 <= 1 * 2 -1  // 1 <= 1 //true 1 * print
//                 // 2 <= 2 * 2 -1  // 2 <= 3 //true 3 * print
//                 // 3 <= 3 * 2 -1  // 3 <= 5 //true 5 * print
//                 // 4 <= 4 * 2 -1  // 4 <= 7 //true 7 * print
//                 // 5 <= 5 * 2 -1  // 5 <= 9 //true 9 * print

//         row += '*';
// }
//         console.log(row);
// }
// }
// InvertedTriangle();

//=========================================================================================================
//tri

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i * 2 - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

//=========================================================================================================
//intri
// for (let i = 5; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i * 2 - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

//=========================================================================================================
// diamond

// let n = 5;
// let space = " ";
// let star = "*";
// for (let i = 1; i <= n; i++) {
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }
// for (let i = n - 1; i >= 1; i--) {
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }

//=========================================================================================================
// right angle triangle

// let n = 5;
// let space = "";
// let star = "*";
// for (let i = 1; i <= n; i++) {
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }
//=========================================================================================================
//right angle down triangle

// let n = 5;
// let space = "";
// let star = "1";
// for (let i = n - 1; i >= 1; i--) {
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }
//=========================================================================================================
//left angle triangle

// let n = 5;
// let space = " ";
// let star = "*";
// for (let i = 1; i <= n; i++) {
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }

//=========================================================================================================
// triangle

// let n = 5;
// let space = " ";
// let star = "*";
// for (let i = 1; i <= n; i++) {
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }

//============================================================================================================
//inverted triangle

// let n = 5;
// let space = " ";
// let star = "*";
// for (let i = n - 1; i >= 1; i--) {
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }

//===============================================================================================================
// right down inverted right angle

// let n = 5;
// let space = "  ";
// let star = "*";
// for (let i = n - 1; i >= 1; i--) {
//   console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
// }

//==============================================================================================================
// let n = 6;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     if (i === n || j === 1 || j === i) {
//       // inga i oda value n oda equal iruka check pandrom
//       // next if i ===n equal ila or ku pogum anga next j === 1 value iruka check pannuvom appidi anga um ila na next last
//       // condtion ku povam j === 1 check pannuvom   ithu  3 check pannum entha condition true iruku athu print agum aprm mela loop pogum
//       //i 2 marum again varum agin pogum ippadiyee i 6 vara vandi odum aprm stop.
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }
//=============================================================================================================
//looks like hollow

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     if (i === n || j === 1 || j === i) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }
//=============================================================================================================
//hallow perfect triangle//

let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (i === n || j === 1 || j === 2 * i - 1) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
