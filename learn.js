function learnGreen(event) {
    event.preventDefault();
  
    document.getElementById("page-green").style.display = 'flex';

    document.getElementsByClassName("circle-container").style.display = 'none';
  
  }
  
  document.addEventListener("submit", learnGreen)