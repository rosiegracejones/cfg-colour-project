function sayHello(event) {
  event.preventDefault();

  var childName = document.querySelector("#name-input").value;

  if (childName !== "") {
    var welcomeText = `Hello ${childName}!`;
  } else {
    var welcomeText = `Hello you!`;
  }

  document.getElementById("welcome").innerText = welcomeText;
}

document.addEventListener("submit", sayHello);


