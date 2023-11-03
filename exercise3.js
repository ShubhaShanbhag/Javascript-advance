//Exercise 3

//Solve the following exercises and submit your answers on GitHub under function_exercises.

// Exercise 1

// The following function returns true if the parameter age is greater than 18.

// Otherwise, it asks for a confirmation and returns its result.
//JAVASCRIPT
// function checkAge(age) {
  //   if (age > 18) {
  // return true; 
  // } else {
   //  return confirm('Do you have your parents permission to access this page?');
 //  }
// }
// Rewrite it, to perform the same, but without if...else, and using arrow function.
  
   const checkAge = (age) =>
      age >18 ? true :confirm("Do you have your parents permission to access this page";)
   
      console.log(checkAge(21));
  
// Exercise 2

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

   function pow( base , exponant){
    let result = 1;
    for (let i = 0 ; i < exponant ; i++){
      result= result* exponant;
    }
    return result;
   }
   console.log(pow(2 ,4));

// Exercise 3

// Replace Function Expressions with arrow functions in the code:

// JAVASCRIPT
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }
// ask(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// )
 const ask = (question , yes , no) =>
    confirm(question)? yes(): no();

    ask("Do you agree?",
    ()=> alert ("You agreed"),
    ()=> alert ( "You canceled the execution")
    
    );

// Exercise 4

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    read() {
    this.a = prompt("Enter the first value:", );
    this.b = prompt("Enter the second value:", );
  },

    sum() {
    return this.a + this.b;
  },

    mul() {
    return this.a * this.b;
  },
};

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());

// Exercise 5

// Write a function min(a,b) which returns the least of two numbers a and b. Use arrow 
// function along with the question mark operator ?

    let min = (a,b) => a < b ? a : b ;
    console.log(min( 3,5));