/*1. Write a console.log statement saying "Hello World!" for each language that you know.*/
var sayHello ='Hello World';// English
console.log(sayHello);
sayHello ='Hej Världen';// swedish
console.log(sayHello);
sayHello ='Jambo Dunia';//Swahili
console.log(sayHello);

/*2. Consider the following code: console.log('I'm awesome');*/
console.log("I'm awesome");

/*3. Declare a variable x and initialize it with an integer.*/
var x;
console.log('the value of x will be: number'); 
console.log(x);
var x= 40;
console.log('the value of x will be: number');
console.log(x);

/*4. Declare a variable y and assign a string to it.*/
var y = 'close';
console.log('the value of my string will be: close');
console.log(y);
y = 'open';
console.log('the value of my string will be: open ');
console.log(y);

/*5. How do you round the number 7.25, to the nearest integer?*/
var z=7.25;
console.log(z);
var a=Math.round(7.25);
console.log(a);
var l=Math.max(z,a);
console.log(l);

/*6. Arrays!*/
var arr = [ ];
console.log('the value of array will be:Null');
console.log(arr);
var myarr =['calf', 'dogs', 'cheetah', 'Zebra'];
console.log(myarr);
myarr.push(["baby pig"]);
console.log(myarr);

/*7. More strings*/
let myString = "this,is,a,test";
console.log(myString);
console.log(myString.length);

/*8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.*/
let foo =3;
console.log('The value of my variable foo is: integer ' + foo);
console.log(typeof foo);
let str ="foo cafe";
console.log('The value of my variable str is: stríng ' + str);
console.log(typeof str);
let boo =true;
console.log('The value of my variable boo is: boolean ' + boo);
console.log(typeof boo);
let obj = {firstName: "Nada", lastName: "Blan"};
console.log('The vlue of my variable obj is: object ' + obj.firstName, obj.lastName);
console.log(typeof obj);
if (foo == str)
console.log('SAME TYPE');
else console.log('NOT SAME TYPE');
if (boo == obj)
console.log('SAME TYPE');
else console.log('NOT SAME TYPE');
if (foo === boo)
  console.log(' Equal');
else console.log('Not Equal');

/*9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?*/
let rem;
rem = 7%3
console.log(rem);

/*10. Write a program to answer the following questions:
10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.*/

var myArray = ['girls', 10, 'boys', 15, 'Women', 30];
console.log('The value of newArray will be: ' + myArray);
console.log(myArray);