//1. Strings!


let myString = "hello,this,is,a,difficult,to,read,sentence"

let myString = "hello,this,is,a,difficult,to,read,sentence"

    console.log(myString);
    

console.log(myString.length);


myString =myString.replaceAll(",&")


//2. Arrays! adding additional array

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe', 'turtle'];

console.log( favoriteAnimals [3]);

let favoriteAnimals = ['blowfish','meerkat', 'capricorn', 'giraffe', 'turtle'];

console.log(favoriteAnimals[4]);

  var myNewArray = ['blowfish','meerkat', 'capricorn', 'giraffe', 'turtle'];

 console.log(myNewArray.length); // 5


var myNewArray = ['blowfish','meerkat', 'capricorn', 'turtle'];




/*2.9 Now if unlike Jim, you don't like meerkats and you want to delete it from the array,
 but you don't know the position or the index of the item in the array, how can you find it? */


/*2.10 Log the index of meerkat to the console. Add a message so it says: 
"The item you are looking for is at index: " (here you should show the index of the item) */

/*More JavaScript*/

//1. Create a function that takes 3 arguments and returns the sum of the three arguments.

// 2. Create a function named colorCar that receives a color, and prints out, "a red car" for example.

// 3. Create an object and a function that takes the object as a parameter and prints out all of its names and values.
 
/* 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. 
And prints "a blue motorbike" for example when called as vehicleType("blue", 2)*/

/* 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 === 3) {
    console.log("true")
} else {
    console.log("false")
} */


/* 6. Create a function called vehicle, like before, but takes another parameter called age, 
so that vehicle("blue", 1, 5) prints "a blue used car" */

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

// 8. How do you get the third element from that list?

// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new caravan".

/* 10. Use the list of vehicles to write an advertisement. 
So that it prints something like: "Amazing Joe's Garage, we service cars, 
motorbikes, caravans and bikes.". (Hint: use a for loop.)

Hint, the output should be correct English with all the punctuation 
in place (that's the challenge). So plurals for the vehicle types, 
commas followed by a single space, the word and to replace the final comma 
and closed off by a period.*/

/* 11. What if you add one more vehicle to the list, can you have that 
added to the advertisement without changing the code for question 10?*/

// 12. Create an empty object.

// 13- Create an object that contains the teachers that you have had so far for the different modules.

// 14. Add a property to the object you just created that contains the languages that they have taught you.

/* 15. Write some code to test two arrays for equality using == and ===. Test the following:

    let x = [1,2,3];
    let y = [1,2,3];
    let z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it! */


/* 16. Take a look at the following code:

     let o1 = { foo: 'bar' };
     let o2 = { foo: 'bar' };
     let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

Does the order that you assign (o3 = o2 or o2 = o3) matter? */

/* 17. What does the following code return? (And why?)

let bar = 42; 
typeof typeof bar; */


//Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.