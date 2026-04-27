"use strict";
//mixed data --key ,value
//tuple types fist element is number and second element is string its fixed length and fixed type
let user;
user = [1, "Tanvir"];
user.push(3, "Imtiaz"); // this will not give an error because push method can add elements to the end of the array but it will not change the type of the elements in the tuple
console.log(user);
console.log(user[0]); //1
console.log(user[1]); //Tanvir
