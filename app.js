/*                                              Chapter 21 to 25
                                             Chapter 21 to 25 task 1

var firstName = prompt ("Enter first name");
var lastName = prompt ("enter last name");

alert ("Hello " + firstName + " " + lastName + " welcomee to my page");*/

/*                                           Chapter 21 to 25 task 2

var phoneName = prompt ("Enter your favourite smartphone name");

document.write ("My favourite phone is: " + phoneName + "<br>" + "Length of string: " + phoneName.length); */

/*                                           Chapter 21 to 25 task 3

var n = "Pakistani";

for (let i = 0; i < n.length; i++) 
{
    if (n[i] == "n") 
    {
        document.write ("String: " + n + "<br>" + "Index of 'n': " + i);
    }
}*/

/*                                           Chapter 21 to 25 task 4

var n = "Hello World";
var last = n.lastIndexOf("l");

document.write ("String: " + n + "<br>" + "Last index of 'l': " + last);*/

/*                                           Chapter 21 to 25 task 5

var n = "Pakistani";

for (let i = 0; i < n.length; i++) 
{
    if (i == 3 ) 
    {
        document.write ("String: " + n + "<br>" + "Character at index 3: " + n[i]);
    }
} */

/*                                           Chapter 21 to 25 task 6

var firstName = prompt ("Enter first name");
var lastName = prompt ("enter last name");
var con = firstName.concat(" " + lastName)
                                            
alert ("Hello " + con + " welcomee to my page");*/

/*                                           Chapter 21 to 25 task 7

var city = "Hyderabad";
var half = "Islam";

document.write ("City: " + city + "<br>");
document.write  ("After replacement: " + half + city.slice(5)); */

/*                                           Chapter 21 to 25 task 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var text = message.replace(/and/g,"&");

document.write (text); */

/*                                            Chapter 21 to 25 task 9 

var num = "472";
var num2 = +num;

document.write ("Value: " + num + "<br>" + "Type: " + typeof num + "<br>" + "Value: " + num2 + "<br>" + "Type: " + typeof num2); */

/*                                            Chapter 21 to 25 task 10

var userInput = prompt ("Enter a word");

var converted = userInput.toUpperCase();

document.write (converted); */

/*                                            Chapter 21 to 25 task 11

var input = prompt ("Enter a word");


for (let i = 0; i < input.length; i++) 
{   
    if (i == "") 
    {
        document.write (input[i].toUpperCase()); 
        document.write (input.slice(1));
    } 
} */

/*                                             Chapter 21 to 25 task 12 

var num = 35.36 ;
var change = num.toString().replace(".","");
document.write ("Number: " + num + "<br>");
document.write ("Result: " + change); */

/*                                             Chapter 21 to 25 task 13  

var value = prompt ("Enter username");

for (let i = 0; i < value.length; i++) 
{
    if (value[i] == "!" || value[i] == "," || value[i] == "." || value[i] == "@") 
    {
        alert ("Please Enter a valid username");
        break;
    }
    else
    {
        document.write (value[i]);
    } 
} */

/*                                              Chapter 21 to 25 task 14

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt ("Search item");

var smallCase = item.toLowerCase();

for (let i = 0; i < a.length; i++) 
{
    if (smallCase == a[i]) 
    {
        alert (smallCase + " is available at index " + i + " in our bakery");
        break;
    }
} */

/*                                              Chapter 21 to 25 task 15

var str = prompt ("Enter password");

for (let i = 0; i < str.length; i++) 
{
    if (str.match(/[a-z]/g) && str.match( 
        /[A-Z]/g) && str.match( 
        /[0-9]/g) && str[0] != str.match (/[0-9]/) && str.length >= 6 )  
    {
        alert ("Good password");
        break;
    }
    else 
    {
        alert ("Enter valid password");
        break;
    }  
} */

/*                                              Chapter 21 to 25 task 16 
 
var university = "University of Karachi";
var arr = university.split("");

for (let i = 0; i < arr.length; i++) 
{
    document.write  (arr[i] + "<br>")   
} */

/*                                              Chapter 21 to 25 task 17

var userInput = prompt ("Enter something");
document.write ("User input: " + userInput + "<br>");

for (let i = 0; i < userInput.length; i++) 
{
    if (i == userInput.length - 1) 
    {

        document.write ("Last character of input: " + userInput[i]);
    }  
} */

/*                                               Chapter 21 to 25 task 18

var text = "The quick brown fox jumps over the lazy dog";
var last = text.toLowerCase().split(" ");
var word = "the";
var b = 0;

for (let i = 0; i < last.length; i++) {
    if (last[i] == word) 
    {
      b++;
    }   
}
document.write ("Text: " + text + "<br>")
document.write ("There are " + b + " occurences of word " + word); */

/*                                                     Chapter 26 to 30
                                                   Chapter 26 to 30 task 1

var posInt = 3.45214;
var roundOff = Math.round (posInt);
var floorIn = Math.floor (posInt);
var ceilOff = Math.ceil (posInt);

document.write ("Number: " + posInt + "<br>" + "Round off value: " + roundOff + "<br>" + "Floor value: " + floorIn + "<br>" + "Ceil vlue: " + ceilOff); */

/*                                                 Chapter 26 to 30 task 2

var posInt = -2.673;
var roundOff = Math.round (posInt);
var floorIn = Math.floor (posInt);
var ceilOff = Math.ceil (posInt);
                                          
document.write ("Number: " + posInt + "<br>" + "Round off value: " + roundOff + "<br>" + "Floor value: " + floorIn + "<br>" + "Ceil vlue: " + ceilOff); */

/*                                                 Chapter 26 to 30 task 3

var num = -4;
var abs = Math.abs(num);

document.write ("The absolute value of " + num + " is " + abs); */

/*                                                 Chapter 26 to 30 task 4

var dice = Math.random();
var newDice = Math.round(dice);
if (newDice == 1) 
{
    alert ("Random dice value: 4 ");
}
else
{
    alert ("Random dice value: 6");
} */

/*                                                 Chapter 26 to 30 task 5

var toss = Math.random() * 2;
var newDice = Math.round(toss);
if (newDice == 1) 
{
    alert (newDice  + " random coin value: Tails");
}
else
{
    alert (newDice + " random coin value: Heads");
} */

/*                                                 Chapter 26 to 30 task 6

var ran = Math.random () * 100;
var newran = Math.round (ran);

alert ("Random  between 1 and 100: " + newran); */

/*                                                 Chapter 26 to 30 task 7
                                                   
var weight = prompt ("Enter your weight");
var num = weight.replace(/\D/g, "");  //D detects non numeric values and d detect numeric values
alert ("The weight of the user is " + num + " kilograms"); */

/*                                                 Chapter 26 to 30 task 8

var secretNum = 7;
var num = prompt ("Enter a number between 1 to 10");

if (num == secretNum)
{
    alert ("Congratulation your guess is correct")
} else 
{
    alert ("Try again");
} */

/*                                                    Chapter 31 to 34
                                                   Chapter 31 to 34 task 1

var dat = new Date;

document.write (dat); */

/*                                                 Chapter 31 to 34 task 2

var arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var mon = new Date;
var newMonth = mon.getMonth();

document.write ("Current month: " + arr[newMonth]); */

/*                                                  Chapter 31 to 34 task 3

var dat = new Date;
var string = dat.toString();
var day = string.slice(0,3);

document.write ("Today is " + day); */

/*                                                  Chapter 31 to 34 task 4

var dat = new Date;
var string = dat.toString();
var day = string.slice(0,3);

if (day == "Sat" || "Sun")
{
    document.write ("It's fun day");
} */

/*                                                  Chapter 31 to 34 task 5

var dat = new Date;
var newDate = dat.getDate();

if (newDate < 16) 
{
    document.write ("First fifteen days of the month");
}
else 
{
   document.write ("Last days of the month"); 
} */

/*                                                   Chapter 31 to 34 task 6

var dat = new Date;
var time = dat.getTime();
var minutes = Math.floor(time / 60000);

document.write ("Current Date: " + dat + "<br>");
document.write ("Elapsed milliseconds sine January 1, 1970: " + time + "<br>");
document.write ("Elapsed minutes sine January 1, 1970: " + minutes); */
 
/*                                                    Chapter 31 to 34 task 7

var dat = new Date;
var hour = dat.getHours();

if (hour <= 11 ) 
{
    document.write ("It's AM");
} else 
{
    document.write ("It's PM");
} */

/*                                                     Chapter 31 to 34 task 8

var dat = new Date;

dat.setMonth (11);
dat.setDate (31);
dat.setHours (00);
dat.setMinutes (00);
dat.setSeconds (00);
dat.setMilliseconds (00);

document.write ("Later date: " + dat); */

/*                                                       Chapter 31 to 34 task 9

var msDiff = new Date().getTime() - new Date("April 24, 2020").getTime(); 
var daysTill = Math.floor(msDiff / (1000 * 60 * 60 * 24));

document.write (daysTill); */

/*                                                       Chapter 31 to 34 task 10

var dat1 = new Date();
var msdat1 = dat1.getTime();
var dat2 = new Date ("January 01, 2020");
var msdat2 = dat2.getTime();

var dat3 = msdat1 - msdat2;
var dat4 = Math.floor (dat3 / (1000));

document.write ("On refrence date " + dat1 + "," + "<br>" + dat3 + " seconds had passed since the begining of 2020"); */

/*                                                       Chapter 31 to 34 task 11

var dat1 = new Date();
var dat2 = dat1.toString();

var newHour = dat1.getHours() - 1;
var newHourStr = newHour.toString();

var dat2Split = dat2.split("");
var dat2Splice = dat2Split.splice(16,2, newHourStr);
var newDate = dat2Split.join("");

document.write ("Current date: " + dat1 + "<br>" + "1 hour ago, it was " + newDate); */

/*                                                         Chapter 31 to 34 task 12

var dat = new Date;

var dat2 = dat.setFullYear (dat.getFullYear() - 100);

document.write ("Current date: " + new Date + "<br>" + "100 years back, it was " + dat); */ 

/*                                                         Chapter 31 to 34 task 13

var age = prompt ("Enter your age");
var ageCal = 2020 - age;

document.write ("Your age is: " + age + "<br>" + "Your birth year is: " + ageCal); */

/*                                                          Chapter 31 to 34 task 14

var arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var dat = new Date;
var month = dat.getMonth();

var customerName = "Faraz";
var noOfUnits = 410;
var charPerUnit = 16;
var netAmount = charPerUnit * noOfUnits;
var latePaySur = 350;
var grossAmount = netAmount + latePaySur;

document.write ("<h1>" + "K-Electric Bill" + "</h1>")
document.write ("Customer Name: " + "<b>" + customerName + "</b>" + "<br>")
document.write ("Month: " + "<b>" + arr[month] + "</b>" + "<br>");
document.write ("Number of units: " + "<b>" + noOfUnits + "</b>" + "<br>");
document.write ("Charges per unit: " + "<b>" + charPerUnit + "</b>" + "<br><br><br>");
document.write ("Net Amount Payable (within Due Date): " + "<b>" + netAmount + "</b>" + "<br>");
document.write ("Late payment surcharge: " + "<b>" + latePaySur + "</b>" + "<br>");
document.write ("Gross Amount Payable (after Due Date): " + "<b>" + grossAmount + "</b>"); */

/*                                                                 Chapter 35 to 38
                                                               Chapter 35 to 38 task 1

function date() 
{
    document.write (new Date);
}
date(); */

/*                                                             Chapter 35 to 38 task 2

function name(a,b)
{
    alert (a + " " + b + " welcome to this page");
}

name("faraz","khan"); */

/*                                                             Chapter 35 to 38 task 3

function add(a,b)
{
    return a + b;
}

alert (add(2,3)); */

/*                                                             Chapter 35 to 38 task 4

function calculator(a,b,c) 
{
    if (b == "+")
    {
        return a + c;
    }
    else if (b == "-")
    {
        return a - c;
    }
    else if (b == "*")
    {
        return a * c;
    }
}

alert (calculator(2,"*",3)); */

/*                                                              Chapter 35 to 38 task 5

function square(a)
{
    alert (Math.sqrt(a));
}

square(2); */

/*                                                               Chapter 35 to 38 task 7

function counting(a,b) 
{
    for (let i = a; i < b + 1; i++) 
    {
        document.write (i + "<br>");
    }
}

counting(2,20); */

/*                                                                Chapter 35 to 38 task 8

function hypotenuse(a,b) 
{
    document.write (Math.hypot(a,b));
}

hypotenuse(2,3); */

/*                                                                Chapter 35 to 38 task 9

function area(width,height) 
{
    document.write(width * height);
}

area (22,31); */

/*                                                                Chapter 35 to 38 task 10

function name(a) 
{
    
var check = "";
for (let i = a.length -1; i >= 0 ; i--) 
{
    check += a[i];   
}

if (a === check) 
{
    document.write ("It is palindrome word");
} 
else
{
    document.write ("It is not a palindrome word");
}   
}

name("civic"); */

/*                                                                  Chapter 35 to 38 task 11

var fromCharCode = String.fromCharCode;
var firstLetterOfWordRegExp = /\b[a-z]|['_][a-z]|\B[A-Z]/g;
function toLatin1UpperCase(x){
    var charCode = x.charCodeAt(0);
    return charCode===39 ? x : fromCharCode(charCode^32);
}
function titleCase(string){
    return string.replace(firstLetterOfWordRegExp, toLatin1UpperCase);
}
document.write (titleCase("the quick brown fox")); */

/*                                                                  Chapter 35 to 38 task 12

function longest(string) {
        var str = string.split(" ");
        var longest = 0;
        var word = null;
        for (var i = 0; i < str.length; i++) {
            document.write(longest);
            if (longest < str[i].length) {
                longest = str[i].length;
                document.write(longest);   
                word = str[i];
            }
        }
        return word;
    }

document.write (longest("Web Development Tutorial")); */

/*                                                                   Chapter 35 to 38 task 13


function checkOccurence(string,letter)
    {
        var b = string.split("");
        var j = 0;

        for (let i = 0; i < b.length; i++) 
    {
            if (b[i] === letter ) 
                {
                j++;
                }
    }
    return j;
    }

document.write(checkOccurence("farazkhan","a")); */

/*                                                                   Chapter 35 to 38 task 14

function calcCircumference(radius)
{
    var a = 2 * 3.14 * radius;
    return a;
}

function calcArea(radius) 
{
    var a = 3.14 * (Math.pow(radius,2));
    return a;
}

document.write ("The circumference is: " + calcCircumference(3) + "<br>");
document.write ("The area is: " + calcArea(3)); */