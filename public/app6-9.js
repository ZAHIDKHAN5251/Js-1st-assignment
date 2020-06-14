//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser

document.write("<h1>Chapter No:---- 6 TO 9-----Task No: 1____</h1>");
let a = 10;
document.write("The value of a is: ",a);
document.write("<br><br>");
document.write("---------------------------------------<br>");
let b = ++a;
document.write("Now The value of ++a is: ",b);
document.write("<br>");
document.write("The value of a is: ",a);
document.write("<br>");
document.write("<br><br>");
let c = a++;
document.write("The value of a++ is: ",c);
document.write("<br>");
document.write("Now The value of a is: ",a);
document.write("<br>");
document.write("<br><br>");
let d = --a;
document.write("The value of --a is: ",d);
document.write("<br>");
document.write("Now The value of a is: ",a);

document.write("<br>");
document.write("<br><br>");
let e = a--;
document.write("The value of a-- is: ",e);
document.write("<br>");
document.write("Now The value of a is: ",a);
document.write("<br><br>");
document.write("--------------------------------------------------task 1 end------------------------------------------------<br><br><br>");

//2. What will be the output in variables a, b & result after execution of the following script:
document.write("<h1>Chapter No:---- 6 TO 9-----Task No: 2____</h1>");
var f = 2; g = 1;
var result = --f - --g + ++g + g--; 
            --f;
            --f - --g; 
            --f - --g + ++g;
            --f - --g + ++g + g--; 
document.write("result is:  ",result);
document.write("<br>");
document.write("a is: ",f);
document.write("<br>");
document.write("b is: ",g);

document.write("--------------------------------------------------task 2 end------------------------------------------------<br><br><br>");
//3. Write a program that takes input a name from user & greet the user. 
//document.write("<h1>Chapter No:---- 6 TO 9-----Task No: 3____</h1>");
//var greet = prompt("Enter you Name: ");
//document.write("Greetings sir ! We welcome you : MR. ",greet);
//document.write("<br>");
document.write("--------------------------------------------------task 3 end------------------------------------------------<br><br><br>");

//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
document.write("<h1>Chapter No:---- 6 TO 9-----Task No: 5____</h1>");
//let table = prompt("Enter any number");
//
//for(var n =1; n<=10; n++){
//    if(n>0){
//     document.write("<br>");
//    document.write(table + "*" + (n) + "=" + (table * (n)));
//    }else if(n<1){
//        let i = 5;
//        for(let j =1; j<=10; j++){
//            document.write(i + "*" + (j) + "=" + (i * (j)));
//        }
//        
//    }  
//}


//document.write("<h1>Chapter No:---- 6 TO 9-----Task No: 6____</h1>");
let eng_marks = prompt("Enter English marks: ");
ob_markEng.innerHTML = ""+eng_marks;

let math_marks = prompt("Enter Maths marks: ");
ob_markMath.innerHTML = ""+math_marks;

let urdu_marks = prompt("Enter Urdu marks: ");
ob_markUrdu.innerHTML = ""+urdu_marks;
let ob_mar = parseInt(eng_marks) + parseInt(math_marks) + parseInt(urdu_marks);
Ob_M.innerHTML = "Ob_marks:"+ob_mar;
<!-------------percentage section-------------->
eng_pr = eng_marks * 100 /100;
eng_p.innerHTML = +eng_pr+ "%";

math_pr = math_marks * 100 /100;
math_p.innerHTML =+math_pr+ "%";

urdu_pr = urdu_marks * 100 /100;
urdu_p.innerHTML = +urdu_pr+ "%";
let ob_per = ob_mar * 100/300;
per.innerHTML = +ob_per+ "%";
document.write("--------------------------------------------------task 6 end------------------------------------------------<br><br><br>");






