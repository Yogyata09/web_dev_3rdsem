
import EventEmitter from 'events';

// Create EventEmitter object
const eventEmitter = new EventEmitter();

// Register greet event
eventEmitter.on('greet', () => {
    console.log("Hello! Welcome to Node.js");
});

// Register exit event
eventEmitter.on('exit', () => {
    console.log("Goodbye! Exiting the program");
});

// Trigger events
eventEmitter.emit('greet');
eventEmitter.emit('exit');
