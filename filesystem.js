console.log(__filename)
console.log(__dirname)

const fs = require("fs");
//create file
fs.writeFile("demo.txt", "Hello this is Node.js file", (err) => {
    if (err) throw err;
    console.log("File created successfully");
});

//read file
fs.readFile("demo.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

//append data in file
fs.appendFile("demo.txt", "\nThis is new line", (err) => {
    if (err) throw err;
    console.log("Data appended");
});

//delete or unlink file
fs.unlink("demo.txt", (err) => {
    if (err) throw err;
    console.log("File deleted");
});

//rename file
fs.rename("demo.txt", "newdemo.txt", (err) => {
    if (err) throw err;
    console.log("File renamed");
});
