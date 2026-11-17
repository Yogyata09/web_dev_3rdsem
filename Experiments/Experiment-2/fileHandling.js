
import fs from 'fs';

// CREATE a file
fs.writeFileSync('data.txt', 'Hello! This is my first file.');

// READ the file
const data = fs.readFileSync('data.txt', 'utf8');
console.log("File Content:", data);

// UPDATE the file
fs.appendFileSync('data.txt', '\nWelcome to Node.js File System.');
console.log("File updated successfully!");

// READ updated file
const updatedData = fs.readFileSync('data.txt', 'utf8');
console.log("Updated Content:", updatedData);

// DELETE the file
fs.unlinkSync('data.txt');
console.log("File deleted successfully!");
