function calculsum(x,y,z){
    
        return (x+y+z);
}

console.log(calculsum(2,4,6));

//2
function colorCar(color){

    console.log(color + " car");
}


colorCar("redCar");


//3
//3a
function showMe(obj) {
 for (var i in obj) {
          console.log(i, ' ', obj[i])
   }
 }

showMe({name:'Maria',age:34,profession:'Teacher'});

// 3b---object is not ietrable

function showMe1(arr) {
 for (let i of arr) {
          console.log(i)
   }
 }
showMe1([2,4,5])

//3b -- create the object independently 

var myobj ={name:'ssss',age:35,profession:'aaaaa',hh:'ssss'};
showMe(myobj);

//4
function vehicleType(color,code){

        if(code == 1){
            console.log("a "+color+ " car");
        } else if (code ==2){

            console.log("a "+color+ " motorbike");
        }

}
        

vehicleType("blue",1);


// 5

(3 === 3) ? console.log("true"):console.log("false")

// 6

function vehicle(color,code1,code2){

    console.log("a blue used car")

}

//6

function vehicle(color,code,age){

        console.log("a"+color+" used car");

}

vehicle ("blue",1,5);

//7

let vehicleList = ["motorbike","caravan","bike","Bmw"];


let lastelement = vehicleList[2];

//8
console.log(lastelement);

//9

function vehicle(color,code,age){

        console.log("a"+color+" new caravan");

}

vehicle("green",1,5);


//10 strict comparisons


var engins = ["motorbike","caravan","bike"]; 
function advertise(arguments) {

   for (var i = 0; i < arguments.length; i++) {
       
       console.log("Amazing Joe's Garage, we service cars, "+arguments[i] + ", "+ arguments[i+1] + " and "+ arguments[i+2]+".");
           break;
       }
   }

advertise(engins);


//12-13-14

var teachers = [{firstname:"John",languages:"php"},{firstname:"John",languages:"Javascript"}]
    
console.log("My name is "+teachers[0].firstname+" and i am teaching "+teachers[1].languages);

//15

Answers for String exercices
[12:25 PM]
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,"meerkat");
console.log(favoriteAnimals);
console.log("The array has a length of "+ favoriteAnimals.length);
favoriteAnimals.splice(3,1); //delete 1 element from index 3
console.log(favoriteAnimals);

for (let x =0;x<favoriteAnimals.length;x++){

if(favoriteAnimals[x]=="meerkat"){

favoriteAnimals.splice(x,1) ; //
console.log("The item you are looking for is at index "+x);
console.log(favoriteAnimals);
}
else{
console.log("I did not find meerkat");
}
    }


var bb = favoriteAnimals.indexOf("meerkat"); //return an integer

if (bb !== -1) {

        favoriteAnimals.splice(bb,1) ; 
        console.log("The item you are looking for is at index "+bb);
}else{
        console.log("I did not find meerkat");
}
[12:28 PM]
Answers for string exercices
//Strings Exercises
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
console.log(myString);
console.log(myString.replace(/,/g," "));