const { log } = require("console");
const fs = require("fs");

//writting data in file using callback function 
fs.writeFile("read.txt","You are crazy",
(err)=>{
    console.log("Inserted Sucessfully");
    console.log(err);

});

//reading Data From file
fs.readFile("read.txt","utf-8",(err,data)=>
{
    console.log(data);

});

//Asynchronous operations do not block the execution of subsequent code. 
//Instead, they allow other operations to continue while they perform their tasks in the background.