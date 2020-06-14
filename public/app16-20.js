//1. Declare and initialize an empty multidimensional array. (Array of arrays)
var Arr=[[1,2],[3,4],[5,6]];
document.write(Arr);
document.write("<br><br>");

//2. Declare and initialize a multidimensional array representing the following matrix:
function multidimensional(array)
{
    return [array[0], array[1], array[2],array[3]];
}
document.write("<br>");
document.write(multidimensional([0, 1, 2, 3]));  
document.write("<br>");
document.write(multidimensional([1, 0 , 1, 2 ]));  
document.write("<br>");
document.write(multidimensional([2, 1, 0, 1]));
document.write("<br><br>");

//3. Write a program to print numeric counting from 1 to 10. 
 for (var input = 1; input <= 10; input++)
 {
    document.write("<br>"+input);
}
 document.write("<br><br>");           
            

//4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user. 
  var tableNum = prompt("Enter Table Number?");
         tableNum = Number(tableNum);
         var tabLen = prompt("Enter Table Length?");
         tabLen = Number(tabLen);
         var i = 1;
         do {
             document.write("<h3>" + tableNum + " X " + i + " = " + tableNum*i + "<br /></h3>");
             i++;
         }while(i <= tabLen);
 document.write("<br><br>");



//5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

 var array = ["Apple", "Banana", "Mango", "Orange", "Huawei"]
 var i = 0;
 while(i < array.length){
     document.write(array[i] + "<br />");
     i++;
 }
       
 var fruit = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
 var i = 0;

 while(i < fruit.length) {
    
     document.write("Element at Index " + i + " is " + fruit[i] + "<br />");
     i++;
    
 }
document.write("<br><br>");

//6. Generate the following series in your browser. See example output.


var i = 1;
 document.write("</br>" ," Counting" , "</br>");

 while(i <= 15) {
 document.write(i + " ");
 i++;
 }

 document.write("</br>" ," Reverse counting" , "</br>");
    
 function reverse_a_number(n)
 {
 	n = n + "";
 	return n.split("").reverse().join(" ");
 }
 document.write(reverse_a_number(12345678901));



 document.write("</br>" ," Even number" , "</br>");
 for(var i = 0; i <= 20; i++) {
     if((i % 2) == 0) {
        
         document.write(" " + i )
     }
 }
 document.write("</br>" ," Odd number" , "</br>");

 for(var i = 0; i <= 20; i++) {
     if((i % 2) != 0)  {
         document.write(" " + i )
     }
 }

 document.write("</br>" ," Series" , "</br>");
 for(var i = 0; i <= 20; i++) {
     if((i % 2) == 0) {
        
         document.write(" " + i+"k" )
     }
 }
document.write("<br><br>");


//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array
var items = ["cake", "apple", "cookie", "chips", "patties"];
 var ask = prompt("Welcome to bakery... what do you want from the Below List sir/ma'am?  1=>cake   2=>apple   2=>cookie   2=>chips   2=>patties");
 ask = ask.toLowerCase();
 var b = items.indexOf(ask);
 for (var i = 0; i < items.length; i++) {
     if(items[i] === ask) {
         alert(ask + " is available at index No. " + b);
         break; 
     }
 } 
 if(items[i] !== ask) {
     alert("Sorry Sir/Ma'am " + ask + " is not available in our bakery");
 } 
document.write("<br><br>");


 
//8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]. 
var arr = [24, 53, 78, 91, 12];
 var largest = arr[0];

 for (var i = 0; i < arr.length; i++) {
     if (largest < arr[i] ) {
         largest = arr[i];
     }
 }
 document.write("Array items is :  " + arr)
   document.write(" <br>");

 document.write("The largest Number is  : " + largest);
document.write("<br><br>");



//9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 

 var arr = [24, 53, 78, 91, 12];
 var smallest = arr[0];

 for (var i = 0; i < arr.length; i++) {
     if (smallest > arr[i] ) {
         smallest = arr[i];
     }
 }
 document.write("Array items is : " + arr)
   document.write(" <br>");

 document.write("The smallest Number is : " + smallest);
document.write("<br><br>");


//10. Write a program to print multiples of 5 ranging 1 to 100.
 var n = 5;  
          
 for (var i = 1; i <= 20; ++i) { 
     document.writeln("," + n * i); 
 }












