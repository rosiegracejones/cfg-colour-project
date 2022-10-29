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
  document.getElementById("emoji").style.display = 'none';
}

document.addEventListener("submit", sayHello)

function learnRed() {

  document.getElementById("wheel-container").style.display = 'none';
  document.getElementById("learn-body").style.backgroundColor = '#ed1c24';
  document.getElementById("page-red").style.display = 'inline';
}

function learnOrange() {

  document.getElementById("wheel-container").style.display = 'none'; 
  document.getElementById("learn-body").style.backgroundColor = '#e87a22';
  document.getElementById("page-orange").style.display = 'inline';
}

function learnYellow() {

  document.getElementById("wheel-container").style.display = 'none'; 
  document.getElementById("learn-body").style.backgroundColor = '#eecc0e';
  document.getElementById("page-yellow").style.display = 'inline';
}

function learnGreen() {

  document.getElementById("wheel-container").style.display = 'none'; 
  document.getElementById("learn-body").style.backgroundColor = '#00a61b';
  document.getElementById("page-green").style.display = 'inline';
}

function learnBlue() {

  document.getElementById("wheel-container").style.display = 'none'; 
  document.getElementById("learn-body").style.backgroundColor = '#3479f8';
  document.getElementById("page-blue").style.display = 'inline';
}

function learnPurple() {

  document.getElementById("wheel-container").style.display = 'none'; 
  document.getElementById("learn-body").style.backgroundColor = '#ac34f8';
  document.getElementById("page-purple").style.display = 'inline';
}

function wheelReturn() {
  window.location.reload()
}