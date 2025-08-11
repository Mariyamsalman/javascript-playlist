/*
---function for external js----
function info(){
 alert('this button is clicked')   
}
 ***************************************************************
 ---------variables:var--------
var variable1=10;
console.log(variable1);
*redeclaration of variable of var
var variable1=30;
console.log(variable1);
*reinitiallization of var variable
variable1=20;
console.log(variable1);
**************************************************************

-----------let variable----------
{
    let variable2=10;
   //
 console.log(variable2);
    variable2=20;     =>update of let variable
   // console.log(variable2);
}
console.log(variable2);  =>not accesible beacuse let variable is block scoped.

*use of same let variables in different scopes
{
    let variable1=10;
   
 console.log(variable1);
}
{
    let variable1=20   
     console.log(variable1);
} 
********************************************

----------------const variable----------------------
const country="pakistan";
console.log(country);
country="america"; => it will give error beacause const variable cannot be update
*********************************************************************
quiz 2
-------------------Q1----------------
 const age=18;
 *********************
 -----------------Q2-------------------
 let name="mariyam";
 var city="karachi";
 console.log(age)
 console.log(name)
  console.log(city)
  ****************************

---------------------Q3--------------------
  function info(){
    console.log("mariyam")
    alert("external js is working")
  } 
    *******************************
     


-----------data types:string--------
let name="Mariyam salman"
console.log(name)
console.log(typeof(name))

--------number-------
let num=10
console.log(num)
console.log(typeof(num))

------boolean-----
let bool=true
console.log(bool)
console.log(typeof(bool))

-------undefined--------
let a
console.log(typeof(a))

-------null------
let b=null
console.log(typeof(b))

----symbol------
let key=Symbol("id")
let key1=Symbol("id")
if(key!=key1){
console.log(true)
} 

----big int------
let num1=200000n
console.log(typeof(num1)) 

----object--------
let obj={name:"sara",age:12,height:5.3,weight:30};
console.log(obj.age)
console.log(typeof(obj))

----array-------
let names=["Sara","ali","Mariyam","omaima"]
console.log(names)

----function------
function info(){
    return true
}
let value=info()
console.log(value)

-------primitve vs refrence------
let x=10
y=x
y=20
console.log(x)

let obj1={a:1}
obj2=obj1
obj2.a=2
console.log(obj1)

------Arithematic operators-------
let x=2
let y=3
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(2**3)
console.log(x**y)
console.log(6%2)
x=6
y=2
console.log(x%y)

--------increament & decreament operator-----
x=8
console.log(++x)
console.log(x++)
console.log(x)

x=8
console.log(--x)
console.log(x--)
console.log(x)

-------ternary operator-------
let age=19
let result=(age>=18)?"you can vote":"you can not vote"
console.log(result)

-------comparision operator-----
x=6
y=7
console.log(x=y)
x=6
y=7
console.log(x+=y)
x=6
 y=7
console.log(x=x+y)

x=6
 y=7
 console.log(x=x-y)
 x=6
 y=7
console.log(x-=y)
x=6
 y=7
 console.log(x=x*y)
 x=6
 y=7
console.log(x*=y)
x=6
 y=7
 console.log(x=x/y)
 x=6
 y=7
console.log(x/=y)
x=6
 y=7
 console.log(x=x**y)
 x=6
 y=7
console.log(x**=y)

------practise set 5-------
Q2:
let num1=20
let num2=4
console.log(num1+num2)
console.log(num1-num2)
console.log(num1/num2)
console.log(num1*num2)
console.log(num1%num2)
console.log(num1**num2)
Q3:
let  marks=85
let passingmarks=40
if(marks>=passingmarks){
  console.log("student has passed the exam")
}
if(marks>80&&marks<100){
  console.log("your grade is A")
}
if(marks!=100){
  console.log("you were not able to achieve full marks")
}


//length

let name="mariyam Salman"
console.log(name.length)

//toUpperCase()
let name1="mariyam Salman"
console.log(name.toUpperCase())
//toLowerCase()
let name2="MARIYAM SALMAN"
console.log(name2.toLowerCase())

//includes
let text="I am learning javascript"
console.log(text.includes("javascript"))

//indexof()&lastindexof()

let fruit="banana"
console.log(fruit.lastIndexOf("a"))

//charAt()
let fruit1="ba1ana"
console.log(fruit1.charAt(2))

//slice(start,end)

let string2="Lavender"
console.log(string2.slice(2))

//substring(start,end)

let string3="Lavender"
console.log(string3.substring(1,5))

//replace()
let text1="I am learning javascript"
console.log(text.replace("javascript","python"))

//trim()
let string4="    mariyam salman   "
console.log(string4.trim())

//concat()
let name4="mariyam"
let name5="omaima"
console.log(name4.concat(" ",name5))

//split()
let fruits="apple,mango,banana,strawberry"
console.log(fruits.split(","))


//Math.round()
let y=3.6
console.log(Math.round(y))

//Math.floor()
console.log(Math.floor(y))

//Math.ceil()
console.log(Math.ceil(y))

//Math.trunc()
console.log(Math.trunc(y))


//Math.max()
console.log(Math.max(2,7,9,10,11))

//Math.max()
console.log(Math.min(2,7,9,10,11))

//Math.sqrt()
console.log(Math.sqrt(y))

//Math.pow()
console.log(Math.pow(2,3))

//Math.random()
console.log(Math.random())
console.log(Math.random())

//Math.abs
let x=-6.72
console.log(Math.abs(x))

//Math.pi
console.log(Math.PI)
-----Booleans &truthy and falsy vales------
let email
if(email){
console.log("if block is running")
}else{
console.log("else block is running")
}

let value="hello"
value=Boolean(value)
console.log(value)
console.log(typeof(value))


------type conversions and type coercions----
//+ = 1 operand string so it converts the second operand in string
//-,*,/= 1 operand number so it converts the second operand in number,it tries to convert other data types in number.

let answer="2" + true
console.log(answer)
console.log(typeof(answer))

if(0==false){
 console.log("true")
}else{
   console.log("false")
}


******************************************
//if statement
let age=10
if(age>=18){
  console.log("you are elligible to vote")
}

  //if else statement
let age=10
if(age>=18){
  console.log("you are elligible to vote")
}else{
  console.log("you are not elligible to vote")
}

//if else if statement

let marks=56;

if(marks>=80&&marks<=100){
  console.log("your grade is A1")
}else if(marks>=70&&marks<80){
  console.log("your grade is A")
}else if(marks>=60&&marks<70){
  console.log("your grade is B")
}else if(marks>=50&&marks<60){
  console.log("your grade is C")
}else{
  console.log("your grade is F")
}

//switch statement
let optionselectedbyuser=4

switch(optionselectedbyuser){
case 1 :{
console.log("pizza will be served")
  break;
}
case 2 :{
console.log("burger will be served")
  break;
}

case 3 :{
console.log("sandwich will be served")
  break;
}

default:
{
  console.log("your selected option is not available")
}

}
*************************
Q1
let age=10
if(age>18){
  console.log("you can vote")
}else{
  console.log("you can not vote")
}

Q2
let temperature=2
if(temperature>30){
  console.log("it is hot")
}else if(temperature>20){
  console.log("it is warm")
}else{
  console.log("it is cold")
}

Q3
let number=4

switch(number){
case 1 :{
console.log("Monday")
  break;
}
case 2 :{
console.log("tuesday")
  break;
}
case 3 :{
console.log("wednesday")
  break;
}
case 4 :{
console.log("thursday")
  break;
}
case 5 :{
console.log("friday")
  break;
}
case 6 :{
console.log("saturday")
  break;
}
case 7 :{
console.log("sunday")
  break;
}

default:
{
  console.log("your selected option is not appropriate")
}

}
******************************************
//for loop
for(a=1;a<=10;a++){
console.log("2 * "+a+"="+2*a)
}

//while loop
let number=1

while(number!=0){

console.log("user dont want to terminate the program")
number=prompt("enter a number,and press 0 to terminate")

}
console.log("user terminated the program")


//do while loop
let number

do{
console.log("user dont want to terminate the program")
number=prompt("enter a number,and press 0 to terminate")

}while(number!=0)
console.log("user terminated the program")

Q1

for(a=1;a<=10;a++){
console.log(a)
}

Q2

let number=1
let sum=0
while(number<=5){

sum+=number
number++
}
console.log(sum)

Q3
let number

do{
console.log("you have not guessed the number")
number=prompt("enter a number")

}while(number!=7)
console.log("you have guessed the number right")
**************************************

//Break statement
let names=["ali","sara","hiba","Mariyam"]
let Search="hiba"
for(a=0;a<=3;a++){
if(names[a]==Search){
  console.log("the name "+names[a]+" has been found on"+a)
  break;
}
}

//continue statment

for(i=1;i<=10;i++){
if(i%2!=0){
  continue
}else{
console.log(i)
}
}
*/
