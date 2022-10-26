function sayHello(event) {
    event.preventDefault();
  
  var childName = document.querySelector("#name-input").value;
  
  if (childName !== "") {
    var welcomeText = `🌈 
    Hi ${childName}!`;
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