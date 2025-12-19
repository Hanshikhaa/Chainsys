const fs=require("fs");
// Read a file
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  console.log("File content:");
  console.log(data);
});

// Write a file
//const fs = require("fs");

fs.writeFile("output.txt", " Hi Happy Weekend", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File written successfully");
});

//Append file 
fs.appendFile("output.txt", "\nAppending new content", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Content appended");
});

// Delete a file 
//const fs = require("fs");

fs.unlink("output.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File deleted");
});
