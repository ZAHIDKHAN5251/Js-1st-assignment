
//1. Declare an empty array using JS literal notation to store student names in future.
//let litral_notation = {};

//2. Declare an empty array using JS object notation to store student names in future.
//let object_notation = new object_notation();

//3. Declare and initialize a strings array.
//let arr_ini = ["apple", "banana", "graps"];
//document.write(arr_ini);

//Declare and initialize a strings array.
//let arr_num = [22, 23, 24];

//5.  Declare and initialize a boolean array.
//let arr_bool = new Boolean(value);

//6. Declare and initialize a mixed array.
//let arr_mizx = [1, "zahid", true];

//7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
//document.write("<h1>QUALIFICATION:</h1>");
//let qualfication = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M,PHIL","Phd"];
//for(var i =0; i<qualfication.length; i++){
//    document.write(qualfication[i]+"<br>");
//}

 
//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
//let std_name = ["zahid", "kaleem", "haleem"];
//let std_marks = [400, 350, 380];
//let std_per = [80, 75, 70];
//document.write("Score of "+std_name[0]+" is "+std_marks[0]+" Percentage :"+std_per[0]+"%");
//document.write("<br>");
//document.write("Score of "+std_name[1]+" is "+std_marks[1]+" Percentage :"+std_per[1]+"%");
//document.write("<br>");
//document.write("Score of "+std_name[2]+" is "+std_marks[2]+" Percentage :"+std_per[2]+"%");


// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method
//let arr_order = [230, 123, 310, 120, 200];
//document.write("Scores of students: "+arr_order+"<br>");
//arr_order.sort();
//document.write("Ordered scores of students: "+arr_order);

//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
//let arr_cities = ["karachi", "lahore", "Islamabad", "Quetta", "peshawer"];
//document.write("<br>");
//document.write("<h3>Cities list:</h3> "+arr_cities);
//document.write("<h3>Selected Cities :</h3> "+arr_cities[0]+" "+arr_cities[2]);


//12.  Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method
let arr_join = ["This", "is", "my", "cat"];
document.write("Array<br>");

document.write(arr_join);
document.write("<br>");
document.write("String<br>");
let arrConversion = arr_join.join(" ");
document.write(arrConversion);

