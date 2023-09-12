/*
Variable Basics:
Create variables to store and log information:
 - Declare a variable for your name and console log it.
 - Declare a variable for your age and console log it.

Explore data types and type conversion:
 - Create variables of different data types (string, number, boolean).
 - Use typeof to check the data type of variables and console.log it.
 - Convert a string to a number and vice versa and return it from a function.

 Arrays:
Work with arrays:
 - Create an array of your favorite fruits and log them.
 - Write a program to find the largest number in an array and log it.

 Objects:
Explore objects:
 - Create an object representing a person with properties like name, age, and country.
 - Write a function that takes a person object as an argument and logs their information.
*/

let name = "Manish";
console.log(typeof(name));
console.log(name);
let age = 17;
console.log(age);

function cvrtNumbertoString(inp)
{
  return Number(inp);
}
function cvrtStringToNumber(inp)
{
  return parseInt(inp);
}


const fav_fruit = ["Mango", "Apple", "banana"];
for(let i = 0; i<fav_fruit.length; i++)
 {
   console.log(fav_fruit[i]);
 }

const arr = [1, 2, 1, 12, 43];
int largest = arr[0];
for(let i = 1; i<arr.length; i++)
 {
   if(arr[i] > largest)
   {
     largest = arr[i];
   }
 }
console.log(largest);

var person = {name:"Manish" age:"17" country:"India"};
function display(person)
{
  console.log(person.name);
  console.log(person.age);
  console.log(person.country);
}  
display(person)




