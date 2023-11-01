// Exercise 1

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

//The function should not modify the array. It should return the new array. For instance:

// JAVASCRIPT
  let arr = [5, 3, 8, 1]

  let filtered = filterRange(arr, 1, 4)
  console.log(filtered);

//   alert( filtered )  // 3,1 (matching values)

//    alert( arr)
// solution:

function filterRange( arr, a, b){
    let filteredArray =[];
    for(i= 0; i< arr.length; i++){
        
        if (arr[i] >= a && arr[i]<= b){
            filteredArray.push(arr[i]);
     }
   
    }
    return filteredArray;
}


//Exercises 2

//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

//For instance:
// JAVASCRIPT
let john = { name: "Vinod", age: 25 }
 let pete = { name: "Sannit", age: 30 } 
  let mary = { name: "Shubha", age: 28 }

 let users = [ john, pete, mary ]

// let names = /* ... your code */

// alert( names ) // John, Pete, Mary

// solution:
  let names = users.map ((user) => user.name);
console.log(names);


//Exercises 3

// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

// JAVASCRIPT
 let john = { name: "John", age: 25 }
 let pete = { name: "Pete", age: 30 }
 let mary = { name: "Mary", age: 29 }

 let arr = [ john, pete, mary ]

// alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28
// solution:
function getAverageAge(arr){
  let ages = arr.map((person) => person.age);
  let sum = ages.reduce((a ,x) => ( a = a+x ), 0)
  let avg = sum/ arr.length ;
  return avg ;
}
console.log(getAverageAge(arr));