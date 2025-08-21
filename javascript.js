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
************************************

//function declaration
function info(a,b){
  console.log("my name is "+a)
  console.log("my age is "+b)
}

let x=prompt("write your name")
let y=prompt("write your age")

info(x,y);


//function Expression

let addition=function(a,b){
  return a+b
};
console.log(addition(2,3))

Q1

function greetuser(a){
  console.log("the user's name is"+a)
}

greetuser("Mariyam")
greetuser("Omaima")

Q2
let multiply=function(a,b){
  return a*b
};

console.log(multiply(2,3))

Q3
function square(a){
  return a*a
}
let cube=function(a){
  return a*a*a
}
console.log(square(3))
console.log(cube(3))

*****************************************
//Arrow function
//with parameter but single line of code wo without braces
let arrowfunc=name=>console.log("my name is "+name)
 
arrowfunc("Mariyam")

//without parameters and return , with a single line of code
let arrowfunc1=()=>console.log("my name is Mariyam")
 
arrowfunc1()

******************************

//parameter argument
function func(age,name,height,weight){
console.log("my age is "+age)
console.log("my name is "+name)
console.log("my height is "+height)
console.log("my weight is "+weight)
}

func(18,"Mariyam",2,20)

//return
function add(a,b){
return a+b

}
let sum=add(2,3)
console.log(sum)


//global scope


let variable="i am accessible throughout the script"

function square(a){
  variable="i have changed it"
  console.log(variable)
  return a*a
}

for(a=1;a<=3;a++){
console.log(a)
  console.log(variable)
}
  console.log(variable)
  square(3)


  //function scope

function square(b){
  let funcscopedvariable="i am accessible inside the function"
  console.log(funcscopedvariable)

for(a=1;a<=3;a++){
console.log(a)
 console.log(funcscopedvariable)
}
  return b*b
}
 square(3)
  console.log(funcscopedvariable)

//block scope

for(a=1;a<=3;a++){
  let blockscopedvariable="hello"
    const blockscopedvariable1="hello"
    var blockscopedvariable2="hello1"
console.log(a)
console.log(blockscopedvariable)
}
console.log(blockscopedvariable2)
console.log(blockscopedvariable)

console.log(blockscopedvariable1)

*****************************
//hoisting in variables
//var 
console.log(variable)
var variable=10
console.log(variable)


//let & const
console.log(variable)
console.log(variable1)

let variable=20
const variable1=20

//hoisting in functions

//function declaration
function1()
function function1(){
  console.log("hello")
}
function1()


//function expression
var1()
var var1=function(){
  console.log("hello")
};

//array:

//pop()
let name=["mariyam","omaima","sufiyan","saad","basim"]

console.log(name.pop())
console.log(name)

//push()
let name=["mariyam","omaima","sufiyan","saad","basim"]
console.log(name)
name.push("hiba")
console.log(name)


//shift()

let name=["mariyam","omaima","sufiyan","saad","basim"]
console.log(name)
name.shift()
console.log(name)

//unshift()

let name=["mariyam","omaima","sufiyan","saad","basim"]
console.log(name)
name.unshift("sara")
console.log(name)

//includes()

let name=["mariyam","omaima","sufiyan","saad","basim"]
console.log(name.includes("omaima"))

//indexof()&lastIndexOf()

let name=["mariyam","omaima","sufiyan","saad","basim","omaima"]
console.log(name.lastIndexOf("omaima"))
 
console.log(name.reverse())

let numbers=[5,4,3,2,1]
console.log(numbers.sort())
**************************************************

//looping thorugh arrays

//for loop

let name=["mariyam","omaima","sufiyan","saad","basim","omaima"]
for(i=0;i<=5;i++){
if(name[i]=="omaima"){
  console.log("omaima was there on index"+i)
  break
} 

}

//forEach()
let name=["mariyam","omaima","sufiyan","saad","basim","omaima"]
name.forEach(function(values,indexes,array){
console.log(values+" and index: "+indexes)
console.log(array)
});
// same with arrowfunction
let name=["mariyam","omaima","sufiyan","saad","basim","omaima"]
name.forEach((values,indexes,array)=>console.log(values+" and index: "+indexes));


//map()
let numbers=[1,2,3,4,5]
let variable=numbers.map(function(elements){

return elements*elements
})
console.log(variable)
console.log(numbers)

q1
let fruits=["mango","apple","kiwi"]
fruits.push("banana")
fruits.shift()
console.log(fruits)

q2
let numbers = [10, 20, 30, 40, 50]

for(i=0;i<=4;i++){

  console.log(numbers[i])
}

numbers.forEach((elements)=>console.log(elements))

q3
let marks = [45, 67, 32, 89, 76]; 
newmarks=marks.map((elements)=>elements+5)
console.log(newmarks)

*********************************
//object literal
let person={
  name:"Mariyam",
  age:18,
  height:3.6
};

//dot notation
console.log(person.name)

//bracket notation
console.log(person["height"])

//add
person.weight=32

//delete
delete person.height

//update
person.age=19

console.log(person)

***********************************

//object method &this keyword

function func(){
    console.log("hi I'm "+this.name)
  }

let person={
  name:"Mariyam",
  age:18,
  height:3.6,
  intro:func
};
let person1={
  name:"omaima",
  age:18,
  height:3.6,
  intro:func
};
person.intro()
person1.intro()
*******************
//nested objects
let person={
  name:"Mariyam",
  age:18,
  subject:{
    maths:20,
    english:30
  },
  height:3.6,
};
console.log(person.name)
console.log(person.subject.maths)

//looping through objects
//for in loop
let person={
  name:"Mariyam",
  age:18,
  height:3.6,

};
for(let key in person){
  console.log(key +":"+person[key])//key:name,person[key]:"Mariyam"
}

//object.keys()
let person={
  name:"Mariyam",
  age:18,
  height:3.6,

};
let keys=Object.keys(person)
console.log(keys)

Object.keys(person).forEach(function (keys){
  console.log(keys +":"+person[keys])//keys:name,person[keys]:"Mariyam"

})
//object.values()

Object.values(person).forEach(function (values){
  console.log(values)

})
//object.entries()
Object.entries(person).forEach(function ([key ,value]){
  console.log(key +":"+value)

})

//destructuring arrays & objects

//in array
let array=["apple","banana","kiwi"]

let [a,b,c,d="strawberry"]=array   //with default value
console.log(a)
console.log(b)
console.log(c)
console.log(d)

 //skipping values
 let [a,,c]=array
 console.log(a)

console.log(c)


//in objects
let person={
  name:"Mariyam",
  age:18,
  height:3.6,

};
let {name:newname,age:newage,height:newheight,country="pakistan"}=person //with assigning new names to variables and default value
console.log(newname)
console.log(newage)
console.log(newheight)
console.log(country)
  
//nested destructuring

 let person={
  name:"Mariyam",
  age:18,
  subject:{
    maths:20,
    english:30
  },
  height:3.6,
};
let {name,age,subject:{maths,english},height,country="pakistan"}=person 
console.log(name)
console.log(age)
console.log(maths)
console.log(english)
console.log(height)
console.log(country)
  

//q1
let car={
brand:"toyota",
year:"2020",
method:function getinfo(){
console.log("this car is "+this.brand+ " from year "+this.year)
}
}
car.method()
//Q2
let student = { 
  name: "Ali", 
  age: 22, 
  address: { 
    city: "Lahore", 
    zip: 54000  }}; 
    let {address:{city}}=student
    console.log(city)
    
********************************
//spread operator
let array=["apple","banana","kiwi"]
let array1=[10,20,30]
let combined=[...array,...array1]
console.log(combined)

let a=function function1(a,b){
  return a+b
}
array=[20,30]
console.log(a(...array))


//rest operator
function function1(...restop){
 for(let name of restop){
  console.log(name)
 }
}
function1("omaima","mariyam","ali")
let array=["apple","banana","kiwi"]
let [a,...restop2]=array
console.log(restop2)

****************************************************
//template literals
let variable=10
console.log("i am "+variable+" years old ")
console.log(`i am ${variable} years old`)
 let string1=`i am "mariyam" ' ''`
let x = 5, y = 10; 
console.log(`Sum = ${x + y}`); 

********************************
//dates in js
//specific dates
let date=new Date("2026-01-1")
console.log(date)

//useful date methods
let date1=new Date()
console.log(date1.getFullYear())
console.log(date1.getMonth())
console.log(date1.getDay())
console.log(date1.getDate())
console.log(date1.getHours())
console.log(date1.getSeconds())
date1.setFullYear(2026)
date1.setDate(22)
20/8/2025
us locale date
8/20/2025
*/
