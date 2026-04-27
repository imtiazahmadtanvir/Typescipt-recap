//built in data types
// string,number,boolean,void,undefined,null,any,

let userId: Number;
let firstName:string;
let LastName:string;
let fullName:string;
let age:number;
let isLoggedIn:boolean;

userId= 12345;
firstName= "Imtiaz";
LastName= "Ahmad";
age= 25;
isLoggedIn= true;

//using concat method to concatenate firstName and LastName and assign it to fullName variable
fullName=firstName.concat(" ", LastName)



console.log(`User ID: ${userId}\nfull Name: ${fullName}\nLast Name: ${LastName}\nAge: ${age} \nIs Logged In: ${isLoggedIn}`);