    var a = 3
    var b = 5
    var c= a+b
    var d= b-a
    var e=a*b
    var f=b/a
    var g=b%a
    document.write("sum of 3 and 5 is "+c  +" <br><br>");
   
    document.write("substraction of 3 from 5 results "+d +"<br> <br>");
    document.write("multiplication of 3 into 5 is "+e +"<br><br>");
    document.write("division of 3 with 5 is "+f +"<br><br>");
    document.write("modulus of 3 with 5 is "+g +"<br><br>");



var a1;
document.write("<br>"+"Value of variable after declration is "+a1+"<br>");
a1=5;
document.write("initial value is "+a1+"<br>");
document.write("value after increament is "+ ++a1 + "<br>");
var b1=a1+7;
document.write("value after addition is "+b1+"<br>");
document.write("value after decreament is "+ --b1+"<br>");
document.write("the remainder is "+b1%3 + "<br><br><br><br><br><br>");

var ticketPrice = 600;
var totalTickets = +prompt("How Many Tickets do you Want to Buy?");
var amount = ticketPrice*totalTickets;

document.write("Total cost of "+ totalTickets +" to a movie is "+ amount +" PKR."+ "<br><br><br>");


var tableOf= +prompt("which table you want to see?");


document.write("Here is the table of   "+ tableOf + "   for You." + "<br><br>");
document.write(tableOf + " X " + "1" + " = " + tableOf*1 + "<br><br>");
document.write(tableOf + " X " + "2" + " = " + tableOf*2 + "<br><br>");
document.write(tableOf + " X " + "3" + " = " + tableOf*3 + "<br><br>");
document.write(tableOf + " X " + "4" + " = " + tableOf*4 + "<br><br>");
document.write(tableOf + " X " + "5" + " = " + tableOf*5 + "<br><br>");
document.write(tableOf + " X " + "6" + " = " + tableOf*6 + "<br><br>");
document.write(tableOf + " X " + "7" + " = " + tableOf*7 + "<br><br>");
document.write(tableOf + " X " + "8" + " = " + tableOf*8 + "<br><br>");
document.write(tableOf + " X " + "9" + " = " + tableOf*9 + "<br><br>");
document.write(tableOf + " X " + "10" + " = " + tableOf*10 + "<br><br><br><br><br>");


document.write("degree conversion" + "<br><br>");

var c=25;
var f = 70;

var farenhite = (c * 9 / 5 ) + 32;
var celcius = (f - 32) * 5 / 9;

document.write( c + "&#176; C is "+ farenhite +" &#176; F" + "<br><br>");
document.write( f + "&#176; F is "+ celcius +" &#176; C"+ "<br><br><br><br>");




document.write("<h1> Shopping Cart </h1>"+"<br><br><br>");

var priceItem1 = 650;
var priceItem2 = 100;
var qtyItem1 = 3;
var qtyItem2 = 7;
var shipping = 100;

var totalItem1 = priceItem1*qtyItem1;
var totalItem2 = priceItem2*qtyItem2;
var totalAmount = totalItem1+totalItem2+shipping;

document.write("<h3>Price of item 1 is "+ priceItem1 + "<br>");
document.write("Quantity of item 1 is "+ qtyItem1 + "<br>");
document.write("Price of item 2 is "+ priceItem2 + "<br>");
document.write("Quantity of item 2 is "+ qtyItem2 + "<br><br>");
document.write("Total Cost Of Your Order is " + totalAmount + "</h3>" +"<br><br><br><br>");


document.write("<h1> Mark Sheet </h1>"+"<br><br><br>");
var totalMarks = 980;
var marksObtained = 804;
var percentage = (804/980) * 100;

document.write("<h3>Total Marks: " + totalMarks +  "<br>");
document.write("Marks Obtained: " + marksObtained +"<br>");
document.write("Percentage: " + percentage +"%<br></h3>");
