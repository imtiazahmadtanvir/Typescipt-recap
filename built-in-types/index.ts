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

console.log(fullName.split(" "))

console.log(`User ID: ${userId}\nfull Name: ${fullName}\nLast Name: ${LastName}\nAge: ${age} \nIs Logged In: ${isLoggedIn}`);

//void is a data type that represents the absence of a value. It is used to indicate that a function does not return a value. In this case, the display function does not return anything, so we can use void as the return type.
function display(): void {
    console.log("Hello i am displaying a message");
}

display();