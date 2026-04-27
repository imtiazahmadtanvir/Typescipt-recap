"use strict";
//built in data types
// string,number,boolean,void,undefined,null,any,
let userId;
let firstName;
let LastName;
let fullName;
let age;
let isLoggedIn;
userId = 12345;
firstName = "Imtiaz";
LastName = "Ahmad";
age = 25;
isLoggedIn = true;
//using concat method to concatenate firstName and LastName and assign it to fullName variable
fullName = firstName.concat(" ", LastName);
console.log(`User ID: ${userId}\nfull Name: ${fullName}\nLast Name: ${LastName}\nAge: ${age} \nIs Logged In: ${isLoggedIn}`);
