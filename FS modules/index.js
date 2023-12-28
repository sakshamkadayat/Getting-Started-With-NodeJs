const { isUtf8 } = require('buffer');
const fs = require('fs'); //adding file system Module


// creating a folder under my name
fs.mkdirSync("Saksham");


//Writting in bio.txt file//
fs.writeFileSync('Saksham/bio.txt',"My name is saksham kadayat");



// Add Extra text in the file//
const data = fs.appendFileSync("Saksham/bio.txt","I am from Farwestern");
console.log(data);





//if encoding is not done then buffer data will be displayed i.e Binary data //
const data = fs.readFileSync("Saksham/bio.txt");
console.log(data);



// UTF-8 Encoding human readable data will be dispayed//
const data = fs.readFileSync("Saksham/bio.txt","utf-8");
console.log(data);



//renaming the txt file
fs.renameSync("Saksham/bio.txt","Saksham/Sakshambio.txt");



//Removing  the txt file
fs.unlinkSync("Saksham/Sakshambio.txt");


// Removing Folder
fs.rmdirSync("Saksham");




// Synchronous operations execute sequentially, 
//one after another, in the order they are written. 
//When a synchronous function is called, it blocks the execution of the subsequent code until it finishes its task.
