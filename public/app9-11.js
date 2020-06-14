//document.write("<h1>Chapter No:---- 9 TO 11-----Task No: 1____</h1>");
////let cities = ["karachi","lahore","islamabad","Gilgit"];
//let city = prompt("Enter city name:");
//if(city=="karachi"){
//    document.write("Welcome to city of lights: ");
//}else{
//    document.write("False entry");
//}
//document.write("<br>");
//document.write("--------------------------------------------------task 1 end------------------------------------------------<br><br><br>");

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

//document.write("<h1>Chapter No:---- 9 TO 11-----Task No: 2____</h1>");
//
//let gender = prompt("Enter city name:");
//if(gender=="male"){
//    document.write(" Good Morning Sir: ");
//}else if(gender=="female"){
//    document.write(" Good Morning Ma’am");
//}else{
//    document.write(" False Entry: ");
//}
//document.write("<br>");
//document.write("====================================== task 2 end ================================<br><br><br>");


//3. Write a program to take input color of road traffic signal from the user & show the message according to this table: 

//document.write("<h1>Chapter No:---- 9 TO 11-----Task No: 3____</h1>");
//let signal = prompt("Enter Signal color:");
//if(signal=="red"){
//    document.write(" Must Stop : ");
//}else if(signal=="yellow"){
//    document.write(" Ready to move.");
//}else if(signal=="green"){
//    document.write(" Move now .");
//}else{
//    document.write(" False Entry.");
//}
//document.write("<br>");
//document.write("====================================== Task 3 End ================================<br><br><br>");



//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
//document.write("<h1>Chapter No:---- 9 TO 11-----Task No: 4____</h1>");
//
//let fuel = prompt("Enter Remaining Fuel: ");
//if(fuel<0.25){
//    document.write("Please refill the fuel in your car: ");
//}else{
//    document.write("Fuel is enough: ");
//}
//document.write("<br>");
//document.write("====================================== Task 4 End ================================<br><br><br>");


//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 
//
//document.write("<h1>Chapter No:---- 9 TO 11-----Task No: 5____</h1>");
//document.write("<h2>MarkSheet </h2>");
//let sub1 = prompt("Enter 1st Subject Marks:");
//let sub2 = prompt("Enter 2nd Subject Marks:");
//let sub3 = prompt("Enter 3rd Subject Marks:");
//let obMarks = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);
//let percen = obMarks * 100 /300;
//
//document.write("Your 1st Subject Marks: "+sub1);
//document.write("<br>");
//document.write("Your 1st Subject Marks: "+sub2);
//document.write("<br>");
//document.write("Your 1st Subject Marks: "+sub3);
//document.write("<br>");
//document.write("Your Total Obtained Marks: "+obMarks);
//document.write("<br>");
//document.write("Your Percentage is : "+percen+ "%");
//document.write("<br>");
//
//if(percen>=80){
//    document.write("Grad: "+"A-One"+"<br>"+"Remarks: "+"Excellent");
//}else if(percen>=70){
//    document.write("Grad: "+"A"+"<br>"+"Remarks: "+"Good");
//}else if(percen>=60){
//    document.write("Grad: "+"B"+"<br>"+"Remarks: "+"You need to improve");
//}else if(percen<60){
//    document.write("Grad: "+"Fail"+"<br>"+"Remarks: "+"Sorry");
//}
//document.write("====================================== Task 5 End ================================<br><br><br>");


document.write("<h1>Chapter No:---- 9 TO 11-----Task No: 7____</h1>");
//7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”
//let gues_num = prompt("Enter any value");
//    if(gues_num==8){
//        document.write("Bingo! Correct answer");
//        
//    }else if(gues_num==7 || gues_num==9){
//        document.write("Close enough to the correct answer");
//    }else{
//        document.write("False entry");
//    }
//document.write("<br>");
//document.write("====================================== Task 7 End ================================<br><br><br>");



//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3
document.write("<h1>Chapter No:---- 9 TO 11-----Task No: 8____</h1>");
//let no = prompt("Enter a Number For check");
//
//if(no % 3 == 0){
//    document.write("the given number is divisible by 3");
//}else{
//    document.write("the given number is Not divisible by 3");
//}
//document.write("<br>");
//document.write("====================================== Task 8 End ================================<br><br><br>");

//9. Write a program that checks whether the given input is an even number or an odd number. 
//document.write("<h1>Chapter No:---- 9 TO 11-----Task No: 9____</h1>");
//let numb = prompt("Enter a Number For check");
//
//if(numb % 2 == 0){
//    document.write("the given number even");
//}else if(numb % 3 == 0){
//    document.write("the given number is odd");
//}else{
//    document.write("The numb is neither even nor odd")
//}
//document.write("<br>");
//document.write("====================================== Task 9 End ================================<br><br><br>");


//10. Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”
//document.write("<h1>Chapter No:---- 9 TO 11-----Task No: 9____</h1>");
//let tempr = prompt("Enter Temprature:");
//if(tempr>40){
//    document.write("It is too hot outside.");
//}else if(tempr>30){
//    document.write("The Weather today is Normal.");
//}else if(tempr>20){
//    document.write("Today’s Weather is cool.");
//}else if(tempr>10){
//    document.write("OMG! Today’s weather is so Cool.");
//}
//document.write("<br>");
//document.write("====================================== Task 10 End ================================<br><br><br>");


//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

document.write("<h1>Chapter No:---- 9 TO 11-----Task No: 11____</h1>");
let firstNo = prompt("Enter First No:");
let secondNo = prompt("Enter Second No: ");
let op = prompt("Enter Any One Operator From: (+, -, *, /, %)");
let add =  parseInt(firstNo) + parseInt(secondNo); 
let mult = parseInt(firstNo) * parseInt(secondNo); 
let sub = parseInt(firstNo) - parseInt(secondNo);
let div = parseInt(firstNo) / parseInt(secondNo);
let mod = parseInt(firstNo) % parseInt(secondNo);
if(op=="+"){
    document.write("Addition is performed:"+add);
}else if(op=="*"){
    document.write("Multiplication is performed:"+mult);
}else if(op=="-"){
    document.write("Subtractionis performed:"+sub);
}else if(op=="/"){
    document.write("Division is performed:"+div);
}else if(op=="%"){
    document.write("Modulus is performed:"+mod);
}







































