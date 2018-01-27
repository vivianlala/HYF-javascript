
//map, filter, =>

var numbers = [1, 2, 3, 4];

var newNumbers = numbers.filter(index => index % 2 !==0);


     doubledNumbers = newNumbers.map (index => index *2);

console.log(doubledNumbers);

//2

let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];


//  Collect two days' worth of tasks.

let tasks = monday.concat(tuesday);
    console.log (tasks);

// Convert the task durations to hours, instead of minutes.

let durationInHours = tasks.map(value => value.duration / 60 );
   console.log(durationInHours);

//Filter out everything that took two hours or more (remove from the collection)

let newTasks = durationInHours.filter(index => index < 2);
     console.log(newTasks);

//Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.

let hourlyPay = durationInHours.map(value => value * 15);
    console.log(hourlyPay);

let totalPay = 0; 

    for (let i = 0; i < hourlyPay.length; i++){
  totalPay += hourlyPay[i];
 };
   console.log (totalPay);

//Output a formatted Euro amount.
console.log ('Salary:' + totalPay + '€');
