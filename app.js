"use strict"

const showMessageByConsole (message) => console.log(message); 
const showMessageByAlert = (message) => alert(message);
const start = () => showMessage('Bien Benido');

window.addEventListener('load', start);
