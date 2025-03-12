//  //Write a program to calculate the sum, difference, product, and modules of two numbers.
//  let a = 30;
//  let b = 6;
//  print(a + b);
//  console.log(""); // Empty line to create space

//  console.log(a - b);
//  console.log(a * b);
//  console.log(a % b) ;

 
//  //    Write a  program to update the value of a variable using +=, -=, *=, and /= operators.
//  let c = 18;
//  console.log((c += 4));
//  console.log((c -= 6));
//  console.log((c *= 2));
//  console.log((c /= 8));

//  //Write a  program to check if a number is between 10 and 20 using comparison and logical operators.
//  // Comparison operators (==, ===, !=, !==, >, <, >=, <=).
//  //Logical operators && ,||,!

//  // Write a  program to check if a number is even or odd using an if-else statement.
//  let number = 8;
//  let num = number % 2;
//  if (num == 0) {
//    console.log(" number is even");
//  } else {
//    console.log("number is odd ");
//  }

//  //Write a  program to check if a number is positive, negative, or zero using else-if
//  let Number = -1;
//  if (Number > 0) {
//    console.log("Number is Positive");
//  } else if (Number < 0) {
//    console.log("Number is Negative");
//  } else {
//    console.log("Number is zero");
//  }

//  // Write a  program to print the day of the week based on a number (1-7) using a switch statement
//  let day = 1;
//  switch (day) {
//    case 1:
//      console.log("Monday");

//      break;
//    case 2:
//      console.log("Tuesday");
//      break;
//    case 3:
//      console.log("Wednesday");
//      break;
//    case 4:
//      console.log("Thursday");
//      break;
//    case 5:
//      console.log("Friday");
//      break;
//    case 6:
//      console.log("Sturday");
//      break;
//    case 7:
//      console.log("Sunday");
//      break;
//    default:
//      console.log("Please entre a day");

//      break;
//  }

//  // Write a  program to check if a number is greater than 10 using the ternary operator
//  let Num = 10;
//  console.log(
//    Num > 10 ? "Number is Greater than 10" : "Number is Less than 10"
//  );

//  // Write a  function to add two numbers and return the result
//  function add(a, b) {
//    return a + b;
//  }
//  console.log(add(13, 11));

//  // Write a  program using an arrow function to multiply two numbers. Pass this function as a callback to another function
//  let multiply = (a, b) => a * b;
//  function callBack(callback) {
//    let callBack = callback(11, 13);
//    console.log(callBack);
//  }
//  callBack(multiply);