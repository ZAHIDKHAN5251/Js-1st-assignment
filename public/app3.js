
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = "I am 15 years old";
alert(age);

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitor = "I am visited this site 14 times ";
alert(visitor);

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”
var visitors_name = "John Doe ordered ";
var product_title = "5-T shirts on  ";
var site = "AZ-ONLINE SHOP";
alert(visitors_name.concat(product_title, site));