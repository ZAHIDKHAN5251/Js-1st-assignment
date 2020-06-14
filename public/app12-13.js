//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

//document.write("<h1>Chapter No:---- 12 TO 13-----Task No: 1____</h1>");
//let text = prompt("Enter any value");
//
// if(text>='a' && text<='z'){
//    document.write("You enter Lower case: ");
// }else if(text>='A' && text<='Z'){
//    document.write("You enter Upper case: ");
// }else{
//     document.write("You enter a number");
// }




//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
//
//document.write("<h1>Chapter No:---- 12 TO 13-----Task No: 1____</h1>");
//let a = prompt("Enter 1st Value");
//let b = prompt("Enter 2nd Value");
//if (a > 0 && b > 0 && a > b) {
//    document.write("The larger number is " + a );
//  } else if (a > 0 && b > 0 && a < b) {
//    document.write("The larger number is " + b);
//  } else if (a === b && a > 0 && b > 0) {
//    document.write("Both numbers are equal!")
//  } else {
//      document.write("Please add an integer!");
//
//  }


//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 

//document.write("<h1>Chapter No:---- 12 TO 13-----Task No: 3____</h1>");
//let num1 = prompt("Enter any number:");
//if(num1 > 0){
//    document.write("The number is possitive:")
//}else if(num1 < 0){
//    document.write("The number is negative:")
//}else if(num1 == 0){
//    document.write("The number is Zero!:")
//}


//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 
//document.write("<h1>Chapter No:---- 12 TO 13-----Task No: 4____</h1>");
//let char = prompt("Enter any character: ");
////var vowels = (['a', 'e', 'i', 'o', 'u']);
//if(char === 'a'||'e'||'i'||'o'||'u'){
//    document.write("true");
//}else{
//    document.write("false");
//}



//5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise. 

//document.write("<h1>Chapter No:---- 12 TO 13-----Task No: 4____</h1>");
  // Function to check Whether both passwords 
            // is same or not. 
            function checkPassword(form) { 
                password1 = form.password1.value; 
                password2 = form.password2.value; 
  
                // If password not entered 
                if (password1 == '') 
                    alert ("Please enter Password"); 
                      
                // If confirm password not entered 
                else if (password2 == '') 
                    alert ("Please enter confirm password"); 
                      
                // If Not same return False.     
                else if (password1 != password2) { 
                    alert ("\nPassword did not match: Please try again...") 
                    return false; 
                } 
  
                // If same return True. 
                else{ 
                    alert("Password Match: Welcome to AZ-TALEEM!") 
                    return true; 
                } 
            } 


 
//6. This if/else statement does not work. Try to fix it: var greeting; 
//document.write("<h1>Chapter No:---- 12 TO 13-----Task No: 6____</h1>");
//var hour = 13; 
//if (hour < 18) { 
//    document.write("Good day"); 
//}else {
//        document.write("Good evening"); 
//} 
 
// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 
//document.write("<h1>Chapter No:---- 12 TO 13-----Task No: 6____</h1>");
//let time = prompt("Enter time:");
//if(time>0 && time <= 12){
//    document.write("Its A.M");
//}else if(time>12 && time <= 24){
//    document.write("Its P.M");
//}


























