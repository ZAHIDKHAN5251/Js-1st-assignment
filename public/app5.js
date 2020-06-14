//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets 

   var adultQty = document.getElementById('quantityAdult');
   var submitBtn = document.getElementById('submitButton');
   var outputPara = document.getElementById('totalPrice');
   
   // generic function that takes in quantity and multiplies with appropriate price
   function calcPrice(qty, price){
     return qty * price;
   }

   // generic function that outputs final price and amout it tickets purchased
   function getMessage(qty, total){
     return outputPara.innerHTML = ' Total cost to buy ' + qty + ' ticket to a movie is: ' + total +'PKR'+ '<br><br>' + '<button>Proceed To Checkout</button>';
   }

   submitBtn.addEventListener('click', function() { 

    if(adultQty.value === '0'){
      alert('Please purchase at least 1 ticket');
    } else {
      var totalAdult = calcPrice(adultQty.value, 600);
      var totalPrice = totalAdult;
      var totalTix = parseInt(adultQty.value);

      getMessage(totalTix, totalPrice);
    }

   }); 




//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 
//2. Repeat task1 for subtraction, multiplication, division & modulus.
document.write("<h1>Chapter # 5 , Task # 1</h1>")
document.write("<h3> CALCULATIONS </h3>");
var a = 3;
var b = 5;
var c = a+b;
var d = a-b;
var e = a*b;
var g = a/b;
var f = a%b;
document.write("Sum of 3 and 5 is: " ,c);
document.write("<br> ");
document.write("Subtraction of 3 and 5 is: " ,d);
document.write("<br> ");
document.write("Multipliacation of 3 and 5 is: " ,e);
document.write("<br> ");
document.write("Multipliacation of 3 and 5 is: " ,g);
document.write("<br> ");
document.write("Modulus of 3 and 5 is: " ,f);

//3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value 
//after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”. 

document.write("<h1>Chapter # 5 , Task # 2</h1>");
document.write("Value after variable declaration is: ??");

var i = 5;
var j = i+1;
var k = j+7;
var l = k-1;
var m = l%3;
document.write("<br>");
document.write("Initial value : ",i);
document.write("<br>");
document.write("Value after increament is : ",j);
document.write("<br>");
document.write("Value after addition is : ",k);
document.write("<br>");
document.write("Value after decreament is : ",l);
document.write("<br>");
document.write("The remainder is  : ",m);


//5. Write a script to display multiplication table of any number in your browser. E.
document.write("<h1>Chapter # 5 , Task # 4</h1>");
var table = 4;
for (var i=1; i<=10; i++){
    document.write("<br>");
    document.write(table + " * " + (i) + " = " + (table * (i)));
}

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
//document.write("<h1>Chapter # 5 , Task # 6</h1>");
 const changeDeg = () =>{
    const fv = document.getElementById('fd').value;

    // T(°C) = (T(°F) - 32) × 5/9

    let newcv = (fv - 32) * 5/9;

    console.log(newcv);

    document.getElementById('cd').value = newcv+"* cel";
  }
const changeDegree = () =>{
    const fg = document.getElementById('cd').value;

    // T(°C) = (T(°F) - 32) × 5/9

    let newcd = (fg *9/5) +32;

    console.log(newcd);

    document.getElementById('fd').value = newcd+"* F";
  }


//document.write("<h1>Chapter # 5 , Task # 6</h1>");
function cost(){
    let totalCost1 = document.getElementById('total1').value;
    let totalCost2 = document.getElementById('total2').value;
    let totalCost3 = document.getElementById('total3').value;
    let totalCost4 = document.getElementById('total4').value;
     document.write("price of item 1 is : "+totalCost1);
    document.write("<br>");
     document.write("Quantity of item 1 is : "+totalCost2);
     document.write("<br>");
     document.write("price of item 2 is : "+totalCost3);
     document.write("<br>");
     document.write("Quantity of item 2 is : "+totalCost4);
     document.write("<br>");
     document.write("Shipping charges is :  100 ");
     document.write("<br>");
    let totalCost = ((totalCost1 * totalCost2)+(totalCost3 * totalCost4));
    let actualCost = totalCost + 100;
    document.write("total cost of your order is : "+actualCost);
    
}


 
//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browse
function marks(){
    let tMarks = document.getElementById('totalMarks').value;
    let obMarks = document.getElementById('obtainedMarks').value;
    document.write("<h1>Percentage Calculation</h1>")
    document.write("Total marks : "+tMarks);
    document.write("<br>");
    document.write("Obtained marks : "+obMarks);
    document.write("<br>");
    let per = (obMarks * 100 / tMarks);
    document.write("Percentage is: "+per)
}


//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. 
//document.write("<h1>Currency Converter</h1>");
function pkr(){
    let sr = document.getElementById('sodiRiyal').value ;
    let usd = document.getElementById('US').value ;
    let pkr = ((sr * 40) + (usd * 166));
    alert("Total Currency in PKR IS:  " +pkr);
}

// Write a program to initialize a variable with some number and do arithmetic in following sequence: 
document.write("<h1>Chapter # 5 , Task # 11</h1>");
document.write("<h2>Perform all calculations in a single expression </h2>");
document.write("<br>");
let p =10;
let r =  (p + 5) * 3/2;
document.write("Result of arithematic operation is: ",r);
document.write("<br>");
document.write("<br>");














