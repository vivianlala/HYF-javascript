//class Movie {
  //constructor(title, director) 

  class Movie{
    constructor(title, director, star){
       
    this.title = title;
    this.director = director;
  }
    }

  let myMovie = new Movie("Black Panther", "Ryan Coogler");
  

   console.log(myMovie);

getTitle(){
 console.log(this.title)
   }

  getDirector() {
    // add your code here
  }

  addStar(star){
 this.star = star;
  }
let stars = 
  getStars() {
    // add your code here
  }

  addWriter(writer) {
Ryan Coogler
Joe Robert Cole
  }

  getWriters() {
    // add your code here
  }

  addRating(rating) {
    // add your code here
  }

  getAverageRating() {
    7,8/10
  }

  // ... Add yours :-) Look to IMDB for inspiration
}

class StaffMember {
  constructor(name, role, dateOfBirth) {
    // add your code here
  }

  addMovie(movie) {
    // add your code here
  }

  getName() {
    // add your code here
  }

  getRole() {
    // add your code here
  }

  getAge() {
    // add your code here
  }
}

// Pick your favorite movie from http://www.imdb.com/

const myMovie = new Movie(...);

const firstActor = new StaffMember(...);
myMovie.addStar(firstActor);
// create and add more staff members

// Make sure that the following actions work.
console.log(myMovie.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
const director = myMovie.getDirector();
console.log(`Director: ${director.getName()}`);