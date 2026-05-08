// //can't reassign value
// const a = 10;
// a = 100;
// console.log(a);

// //let
// let temp = 10;
// console.log(temp);

// //var you can access before initilization
// console.log(temp); //gives undefined
// var temp1 = 10;

// a = 10;
// console.log(a);

//sum
// let a = 10;
// let b = 20;

// console.log(a+b);

// string + string (concatenation)
// let s1 = "hello";
// let s2 = " world!";
// console.log(typeof(s1+s2));

// let s1 = "hello";
// let s2 = 10;
// console.log(s1+s2);

// let a = 10;
// let b = 20;

// // console.log("the sum of" + a + " and " + b + " is " + (a + b));
// console.log(a + b + " is the sum " + a +" and " + b);

//type coercian
//console.log('1'%1);

////////////////////////////////

// let prompt = require('prompt-sync')()

// let age = Number(prompt("Enter your age"));
// console.log(typeof age);
// console.log(`Age ${age}`);

//swapping
// let a = 10;
// let b = 20;

// let temp = a;
// a = b;
// b = temp;

// console.log(`${a} ${b}`);

//swapping vars

// let a = 120;
// let b = 202;
// console.log(`${a} ${b}`);

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`${a} ${b}`);

// [a,b] = [b,a];
// console.log(`${a} ${b}`);

//Skipped Operator Video

//Math library

// console.log(Math.abs(-123123));
// console.log(Math.ceil(10.2));
// console.log(Math.floor(10.9));
// console.log(Math.round(0.5));
// console.log(Math.round(0.4));
// console.log(1231.213.toFixed(1));
// console.log(Math.random());

let prompt = require("prompt-sync")();
// let p = prompt("Enter Principle:");
// let r = prompt("Enter Rate:");
// let t = prompt("Enter time:");

// console.log((p*Math.pow(1+(r/100),t)-p).toFixed(2));

//OTP
//1000-9999
console.log(Math.trunc((Math.random()*9000)+1000)); //0+1000 to 8999





