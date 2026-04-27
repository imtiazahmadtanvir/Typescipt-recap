"use strict";
//union types allow us to define a variable that can hold multiple types of values. We can use the pipe (|) operator to specify the different types that a variable can hold. In this example, we are defining a variable userID that can hold either a number or a string. This allows us to assign both numeric and string values to the userID variable without any type errors.
let userID;
userID = 12345;
userID = "12345";
userID = true;
function DisplayUserInfo(userId) {
    console.log(userId);
}
//Function accept number, string and boolean values as well. So we can call the function with different types of arguments without any type errors. This is one of the main advantages of using union types in TypeScript, as it provides flexibility in handling different types of data while still maintaining type safety.
DisplayUserInfo(12345);
DisplayUserInfo("12345");
DisplayUserInfo(true);
