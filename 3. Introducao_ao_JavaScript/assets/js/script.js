var currentNumberWrapper = document.getElementById("currentNumber");
var subtractButton = document.getElementById("subtract");
var addButton = document.getElementById("add");
var currentNumber = 0;

subtractButton.addEventListener('click', decrement);
addButton.addEventListener('click', increment);

function increment() {
  if(currentNumber == -10) {
    subtractButton.style.color = "lightcoral";
    subtractButton.style.borderColor = "lightcoral";
    subtractButton.style.backgroundColor = "rgb(241, 214, 214)";
  }
  if(currentNumber < 10) {
    currentNumber++;
  }
  if (currentNumber >= 0) currentNumberWrapper.style.color = "blue";
  if(currentNumber == 10) {
    addButton.style.color = "grey";
    addButton.style.borderColor = "grey";
    addButton.style.backgroundColor = "lightgrey";
  }
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  if(currentNumber == 10) {
    addButton.style.color = "lightcoral";
    addButton.style.borderColor = "lightcoral";
    addButton.style.backgroundColor = "rgb(241, 214, 214)";
  }
  if(currentNumber > -10){
    currentNumber--;
  }
  if(currentNumber < 0) currentNumberWrapper.style.color = "red";
  if(currentNumber == -10) {
    subtractButton.style.color = "grey";
    subtractButton.style.borderColor = "grey";
    subtractButton.style.backgroundColor = "lightgrey";
  }
  currentNumberWrapper.innerHTML = currentNumber;
}