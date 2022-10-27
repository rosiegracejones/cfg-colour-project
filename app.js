function sayHello(event) {
  event.preventDefault();
  
  var childName = document.querySelector("#name-input").value;
  
  if (childName !== "") {
    var welcomeText = `🌈Hi ${childName}!`;
  } 
  
  else {
    var welcomeText = `Hi! 🌈`;
  }
  
  document.getElementById("welcome").innerText = welcomeText;
  document.getElementById("welcome").style.fontSize = '50px';
  document.getElementById("name-submission").style.display = 'none';
  document.getElementById("learn-mix-buttons").style.display = 'flex';
  document.getElementById("choose-text").style.display = 'flex';
}

document.addEventListener("submit", sayHello)

function learnOrange() {

  document.getElementById("circle-container").style.display = 'none'; 
  document.getElementById("learn-body").style.backgroundColor = '#e87a22';
  document.getElementById("page-orange").style.display = 'flex';
}

function learnYellow() {

  document.getElementById("circle-container").style.display = 'none'; 
  document.getElementById("learn-body").style.backgroundColor = '#eecc0e';
  document.getElementById("page-yellow").style.display = 'flex';
}

function learnGreen() {

  document.getElementById("circle-container").style.display = 'none'; 
  document.getElementById("learn-body").style.backgroundColor = '#00a61b';
  document.getElementById("page-green").style.display = 'flex';
}

function learnBlue() {

  document.getElementById("circle-container").style.display = 'none'; 
  document.getElementById("learn-body").style.backgroundColor = '#3479f8';
  document.getElementById("page-blue").style.display = 'flex';
}

function learnPurple() {

  document.getElementById("circle-container").style.display = 'none'; 
  document.getElementById("learn-body").style.backgroundColor = '#ac34f8';
  document.getElementById("page-purple").style.display = 'flex';
}

function learnRed() {

  document.getElementById("circle-container").style.display = 'none'; 
  document.getElementById("learn-body").style.backgroundColor = '#ed1c24';
  document.getElementById("page-red").style.display = 'flex';
}

function wheelReturn() {

  document.getElementById("circle-container").style.display = 'block'; 
  document.getElementById("learn-body").style.backgroundColor = '#e7def1';
  document.getElementById("page-red").style.display = 'none';
  document.getElementById("page-orange").style.display = 'none';
  document.getElementById("page-yellow").style.display = 'none';
  document.getElementById("page-green").style.display = 'none';
  document.getElementById("page-blue").style.display = 'none';
  document.getElementById("page-purple").style.display = 'none';
}