//1.We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.
function foo(func) {
       
return bar(func);
}
  function bar() {
 console.log("Hello, I am bar!");
}
foo(bar);


//2
function arguments(start, end, threeCallback, fiveCallback){
  let codes = [10, 15, 3, 5];
  
  return startValue(arguments);
}
function startValue(threeCallback){
  let codes = [10, 15, 3, 5];
  let i = 0;
  for (; i.length; i++);
  if ( [i] % 3){
    return arguments;
    console.log(arguments.codes);
    
  }
  else 
  {console.log("no")}
  }
function endValue(fiveCallback){
  if ( [i] % 5){
    return arguments;
    console.log(arguments.codes + "5 divided");
  }
  else {console.log("no again")}
}
startValue(arguments);
arguments(10, 15, 3, 5);


//5 Scope and closure

//Write a function that would allow you to do this:

let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27


function createBase(baseNumber) {
    return function(N) {
      return baseNumber + N;
    }
  }
  
  var addSix = createBase(6);
  addSix(10);
  addSix(21);

/*Bonus: Write a function takes this array ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array which only has unique values in it (so it removes the duplicate ones).*/
function remove_duplicate(arr){
    var obj={}, item;
    for (item of arr ){
      obj[item]=1;
    }
    return Object.keys(obj)
  }
  
  console.log(remove_duplicate(['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']));