/**
 Countdown Loop:
Write a program that uses a loop to count down from 10 to 1, log each number in the console. Once it reaches 1, print "Blast Off!"

Even Number Sum:
Create a program that calculates and logs the sum of all even numbers from 1 to 50 using a loop.

Multiplication Table:
Generate a multiplication table for a given number (e.g., 7). Use a loop to display the table from 1 to 10. Just log the result in the table in the console.

Reverse a String:
Write a function that takes a string as input and uses a loop to reverse it. For example, if given "hello," the function should return "olleh." and log it

Factorial Calculator:
Implement a program that calculates and displays the factorial of a given number (e.g., 5). Use a loop to perform the calculation.

Prime Number Checker:
Create a function that checks whether a given number is prime or not. Use a loop to test divisibility by numbers from 2 to the square root of the given number.
 */
function count()
{
 let i = 10;
 while(i>0)
  { 
    console.log(i);
    i--;
  }
 console.log("Blast Off!");
}
count();
function evensum(n){
 let sum = 0;
   for(let i = 2; i <=n;i++){
       if(i%2 == 0)
       {
        sum = sum + i;
       }
   }
 return sum;
}
console.log(evensum(50));
function table(n)
{
 let i = 1;
 while(i<=10)
  {
   console.log(n+"*"+i +"="+i*n);
   i++;
  }
}
table(5);
function reverse(s)
{
    let rev = "";
    for(let i = s.length-1; i>=0; i--)
    {
        rev = rev+s.charAt(i);
    }
    return rev;
}
console.log(reverse("hsinaM"));
function reverse(s)
{
 let low = 0;
 let high = s.length;
 while(low<high)
  {
   
  }
}
function factorial(n){
    let fac=n;
     while(n>1)
      {
       fac=fac*(n-1);
       n--;
      }
      return fac;
 }
 console.log(factorial(5));

function isprime(n) {
    for (let i = 2; i!=n && i < 10; i++) {
        if (n % i == 0) {
            console.log(n+" Not prime");
            return;
        }
    }
    console.log(n+" is prime");
}

isprime(11);
