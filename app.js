// Chapter no 31 to 34 

// Q1
// var dobj = new Date();

// Q2
// var dStr = new Date().toString();

// Q3
// var day = d.getDay();

// Q4
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var d = new Date(); 
// var dayIndex = d.getDay(); 
// alert("Today is: " + dayNames[dayIndex] + " (Index: " + dayIndex + ")");

// Q5
// var d = new Date(); 

// var year = d.getFullYear();
// var month = d.getMonth() + 1; 
// var date = d.getDate();
// var day = d.getDay(); 
// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();
// var milliseconds = d.getMilliseconds();

// var timeZoneOffset = d.getTimezoneOffset(); 

// console.log("Year: " + year);
// console.log("Month: " + month);
// console.log("Date: " + date);
// console.log("Day: " + day);
// console.log("Hours: " + hours);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);
// console.log("Milliseconds: " + milliseconds);
// console.log("Time zone offset (minutes): " + timeZoneOffset);

// Q6
// var later = new Date(2020, 11, 31); 

// Q7
// var date1992 = new Date(1992, 1, 2); 

// Q8
// alert(new Date(1980, 0, 1).getTime());

// Q9
// var date = new Date(); 
// date.setFullYear(2025); 

// Q10
// function changeMonthToJanuary(date) {
//     date.setMonth(0);
//     return date;
// }

// var myDate = new Date();
// var updatedDate = changeMonthToJanuary(myDate);
// console.log(updatedDate);

// Q11
// var date = new Date('2023-10-15'); 
// date.setDate(20); 
// console.log(date); 

// Q12
// function changeMinutes(date) {
//     var newMinutes = prompt("Enter the new minutes (0-59):");
//     if (newMinutes >= 0 && newMinutes < 60) {
//         date.setMinutes(newMinutes);
//         return date;
//     } else {
//         console.error("Invalid minutes value. Please enter a number between 0 and 59.");
//         return date;
//     }
// }

// var myDate = new Date();
// var updatedDate = changeMinutes(myDate);
// console.log(updatedDate);

// Q13
// function addHours(date, hoursToAdd) {
//     date.setHours(date.getHours() + hoursToAdd);
//     return date;
// }

// var myDate = new Date();
// var updatedDate = addHours(myDate, 5);
// console.log(updatedDate);

// Q14
// function calculateAge(birthDate) {
//     var today = new Date();
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDifference = today.getMonth() - birthDate.getMonth();
    
//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
    
//     return age;
// }

// var birthDate = new Date(prompt("Enter your birthdate (YYYY-MM-DD):"));
// var age = calculateAge(birthDate);
// console.log("Your age is: " + age);



// Chapter 35 - 37

// Q1
// function displayAlert() 

// Q2
// function askName() {
//     var userName = prompt("Enter name");
// }

// Q3
// function callFunctions() {
//     displayAlert();
//     askName();
// }

// Q4
// function promptAndAlertName() {
//     var name = prompt("Enter name");
//     alert(name);
// }

// promptAndAlertName();

// Q5
// function concat(a, b, c) 

// Q6
// function concatenateStrings(str1, str2) {
//     result = str1 + str2; 
// }

// Q7
// function multiplyThreeNumbers(num1, num2, num3) {
//     result = num1 * num2 * num3; 
// }

// Q8
// function average(numbers) {
//     var sum = numbers.reduce((acc, num) => acc + num, 0);
//     return sum / numbers.length;
// }

// Q9
// function sum(a, b) {
//     return a + b;
// }

// Q10
// function average(numbers) {
//     var sum = numbers.reduce((acc, num) => acc + num, 0);
//     return sum / numbers.length;
// }

// Q11
// var total = sum(5, 10); 

// Q12
// function letterCount(word) {
//     return word.length;
// }

// Q13
// function setYear(date, year) {
//     date.setFullYear(year);
//     return date;
// }

// Q14
// function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDifference = today.getMonth() - birthDate.getMonth();
//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }

// Q15
// function isWordInArray(word) {
//     var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
//     return array.includes(word);
// }

// Q16
// function repeatLetter(letter) {
//     return letter.repeat(10);
// }

// Q17
// function reverseArray() {
//     var arr = ['a', 'b', 'c', 'd', 'e'];
//     return arr.reverse();
// }



// Chapter 38

// Q1
// function demonstrateLocalVariable() {
//     var localVariable = "I'm a local variable!";
//     console.log(localVariable);
// }

// demonstrateLocalVariable();

// Q2
// var globalVariable = "I'm a global variable!";

// function accessGlobalVariable() {
//     console.log(globalVariable); 
// }

// accessGlobalVariable(); 


// Chapter 39 to 40

// Q1
// let day = "Tuesday";

// switch (day) {
//     case "Monday":
//         console.log("Start of the work week!");
//         break;
//     case "Tuesday":
//         console.log("It's Tuesday!");
//         break;
//     case "Wednesday":
//         console.log("Midweek already!");
//         break;
//     case "Thursday":
//         console.log("Almost there!");
//         break;
//     case "Friday":
//         console.log("Last working day of the week!");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's the weekend!");
//         break;
//     default:
//         console.log("Not a valid day.");
// }

// Q2
// let cityName = prompt("Enter your city name:"); // Get user input

// switch (cityName) {
//     case "New York":
//         alert("Welcome to New York!");
//         break;
//     case "Los Angeles":
//         alert("Welcome to Los Angeles!");
//         break;
//     case "Chicago":
//         alert("Welcome to Chicago!");
//         break;
//     case "Houston":
//         alert("Welcome to Houston!");
//         break;
//     case "Phoenix":
//         alert("Welcome to Phoenix!");
//         break;
//     default:
//         alert("City not recognized. Please try again.");
// }




                                            //    THE END 