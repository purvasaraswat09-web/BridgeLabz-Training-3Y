// console.log("Hello World!")
// v8 engine chrome
// data type - permitive - 8
// let var const


// var and function hosting support karte hai
// console.log(a);
// var a = "Hello";


// scope =>
// 1 global
// 2 block
// 3 functional scope => var is a functional scope

// let a = "hello";
// {
//     console.log(a);
// }
// console.log(a);
//  Output = 2 times hello


// {
//     let a = "hello";
//     console.log(a);
// }
//     console.log(a);


// function fun(){
//     var a = "hello";
//     console.log(a);
// }
// console.log(a);   // Output = error


// == vs ===
// null vs undefined
// string concatenation
// string interpolation

// let name = "Satya"
// let msg = `hello my name is ${name}`
// console.log(msg);



// method vs function
// let username = "   abc xyz  ";
// console.log(username.trim());
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.includes("xyz"));
// console.log(username.replace("abc", "a"));
// console.log(username.trim().split());


// let password = "wertyui#$WQ23";

// function checkPassword(password) {
//     if (password.length >=6 && password.length <=20 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/) && password.match(/[^A-Za-z0-9]/)) {
//         return "Password is valid.";
//     } else {
//         return "Password must be between 6 and 20 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
//     }
// }

// console.log(checkPassword(password));

//  function otpGenerator() {
//     let otp=Math.floor(1000+Math.random()*9000);
//     return otp;
// }
// console.log(otpGenerator());


// array method
// let arr=["apple","mango",10,20,30,true,false];

// function generateRandomHexColor() {
//     let hexColor = '#';
//     const hexDigits = '0123456789ABCDEF';
//     for (let i = 0; i < 6; i++) {
//         hexColor += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
//     }
//     document.body.style.backgroundColor = hexColor;
//     return hexColor;
// }
// console.log(generateRandomHexColor());

// boolean
// true:-"gjdgjd",124,-1,[],{},function(){},new Date(),new RegExp()
// false:-" ",0,null,undefined

// let a = "";
// if(a || null){
//     console.log("true");
// }  else{
//     console.log("false");
// }


// console.log(Boolean(a)); 
// document.body.style.backgroundColor = generateRandomHexColor();
// generate random hex color

// type converstion
// implicit type conversion
// let result=10-"4";

// console.log(result);    
// console.log(typeof result);

// console.log(true+3);
// console.log(false+5);

// explicit type conversion
// let strnumber="123";
// let number=Number(strnumber);
// console.log(number);
// console.log(typeof number);

// let number=123;
// let strnumber=String(number);
// console.log(strnumber);
// console.log(typeof strnumber);

// function declaration
// function add(a,b){
//     let result = a+b;
//     console.log("result is: ",result);
//     // return result;
// }
// console.log(add(10,20));

// funtion expression/annumous function
// let add=function(a,b){
//     let result = a+b;
//     return result;
// }
// console.log(add(10,20));

// Arrow function
// let add=(a,b)=>{
//     let result = a+b;
//     return result;
// }
// console.log(add(10,20));

// let add=(a,b)=> a+b
// let mul=(a,b)=> a*b
// console.log(add(10,20))

// higer order finction => function as a parameter and Add function call as call back function
// function calculate(a,b,callback){
//     let result = callback(a,b);
//     // console.log("result is: ",result);
//     return result;
// }

// console.log(calculate(50,20,add));
// console.log(calculate(50,10,mul));


// map()
// let fun= (a)=> a*2
// let result=arr.map(fun);
// let result=arr.map(a=> a*2);
// console.log(result);
// console.log(arr);

// let res=arr.map(x=>x*x)
// console.log(res)

// let even=arr.filter(x=>x%2==0)
// console.log(even)

// let arr=[1,2,3,4,5];

// let arr3=["Apple","mango","banana","grapes","apple","AppLe"]
// let res=arr3.filter(x=>x.toLocaleLowerCase()!="apple")
// let apple=arr3.filter(x=>x.toLocaleLowerCase()=="apple")
// let res1=arr3.filter(x=>x.length>5)
// let res2=arr3.filter(x=>x.charAt(0).toLocaleLowerCase()=="a")
// console.log(res2)
// console.log(res1)
// console.log(apple)
// console.log(res)

// let arr4=[12,36,16,45,17,12,56,56,89,100]
// let res4=arr4.filter(x=>x>18)
// console.log(res4)

// "use strict"
// a=10
// console.log(a)

// function fun(a,a){
//     console.log("hello");
   
// }
// fun(10,20)

// console.log(this)

//hosting support:- var,function declaration,
// console.log(b);

// var b="hello"

b()

// var b=function(){
//     console.log("hello");
// }

var b=()=>{
    console.log("hello");
}