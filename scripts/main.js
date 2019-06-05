// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Your name?');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}