//  1. Print 1-135

// write a loop
// loop should starts from 1 and ends with 135
//print the numbers

for( let i = 1 ; i <= 135 ; i++){
    console.log(i);
}

//  2. Print Odd Numbers

// write a loop
// it should display all odd numbers from 1 to 135
// print  the numbers

for( i = 1 ; i < 135 ; i = i + 2 ){
   console.log(i)
}

// 3. Sum of Printed Numbers

// Declare a new variable  x and asign  the value 0
// write a loop starts with 0 and ends with 135
// adding previous numbers to get sum
// write string statement and asign it to variable string
// print the value

let x = 0 ;
for ( y = 0 ;  y <= 135 ;  y++ ){
    x = y + x
    let string = "Number is: " + y + "  Sum: " + x
    console.log(string);
}


// 4. Print the elements of an array

// declare an array with values
// write a for loop staring from 0 until length of array
// display the value 

 let Array = [ 3 ,71 ,9 ,1 ,0 ,14]
for ( i = 0 ; i < Array.length ; i++ )  {
    console.log(Array[i])
}

//  5. Find Max

// declare array with values
// use Math.max to find maximum value of an array
// display value

let array = [2, -3, -1 ,0, 23, 63, -61];
  
let max = Math.max(...array);
console.log(max);

// 6. Get Average


// declare an array with values
// use forloop to find sum of all the values in array
// find average 
// display average

let arr = [2 ,1 ,34, 5, 4, 19, 0 ,78 ];
let sum = 0 ;
 for ( i = 0 ; i < arr.length; i++){
    sum += arr[i];
 }
 let avg = sum / arr.length;
 console.log(avg);

// 7. Eliminate the Negatives

// declare an array with values
// write a loop 
// asign 0 to negative number
// display the array


let number = [ 2,-1,4,-3, 11, 6, -9 ]
     for (let i=0; i<number.length ; i++){
         if(number[i] < 0){
             number[i] = 0 ;
         }
     }
 console.log(number);
 
// 8. Number to String

// declare an array with values
// write a loop 
// asign good morning to negative number
// display the array



 let arr1 = [1,-4,0,-1,11, 3 ,-7 ,-34];

        for(var i =0; i<arr1.length; i++){
        if(arr1[i] < 0){
           arr1[i] = 'Good Morning';
     }
    }
    console.log(arr1);



 


 

