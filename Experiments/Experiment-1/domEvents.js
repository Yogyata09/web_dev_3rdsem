
import EventEmitter from 'events';

// Create event object
const button = new EventEmitter();

// Register click event
button.on('click', () => {
    console.log("Button clicked!");
});

// Register mouseover event
button.on('mouseover', () => {
    console.log("Mouse is over the button!");
});

// Trigger events
button.emit('click');
button.emit('mouseover');
