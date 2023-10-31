// Exercise 1

JAVASCRIPT
let user = {
  name: "John",
  years: 30
}
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

const {name, years, isAdmin} = user;

//Exercise 2

// Give the right name:

// Create the variable with the name of our planet. How would you name such a variable?
// Create the variable to store the name of the current visitor. How would you name that variable?

   const ourPlanet = "Earth";
   let currentVisitor = "John";

// Exercise 3

//  What will be result of the call at the last line and why?Look at the code.

  JAVASCRIPT
    let phrase = "Hello"

     if (true) {
    let user = "John";
    function sayHi() {
      alert(`${phrase}, ${user}`)
   }
  }

    sayHi()

   // The above function will alert Hello , John. bcz the  given condition is true

   //Exercise 4

//Write the code, one line for each action:

// Create an empty object user.

      let user = {}
// Add the property name with the value John.
      user.name = "John";
// Add the property surname with the value Smith.
      user.surname = "Smith";
// Change the value of the name to Pete.
       user.name = "Pete";
// Remove the property name from the object.
       delete user.name

 //  Exercise 5

 // Is it possible to change an object declared with const, how do you think and why?
     JAVASCRIPT
    const user = {
    name: "John"
 }
     //does it work?
    user.name = "Pete"

    // yes, we can reasign the value of key .

    // Exercise 6

    //We have an object storing salaries of our team:
    let salaries = {
          Fred: 100,
          Ted: 160,
          Ghaith: 130,
         };
   //Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

   let sum = 0;

   for (const value of Object.values(salaries)) {
     sum += value;
   }
 console.log(sum) ;

//  Exercise 7
//Rewrite this if using the ternary operator '?':

 if (a + b < 4) {
    result = 'Below';
      } else {
    result = 'Over';
 }

 let (a+b <4)? 'Below':'Over';

 // Exercise 8
 // Rewrite if..else using multiple ternary operators '?'.

 let message;

 if (login == 'Employee') {
   message = 'Hello';
 } else if (login == 'Director') {
   message = 'Greetings';
 } else if (login == '') {
   message = 'No login';
} else {
   message = '';
 }
 let message = (login == 'Employee')? 'Hello':(login == 'Director')? 'Greetings':(login == '')?'No login': null;