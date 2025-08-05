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
*/
