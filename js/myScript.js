
 // alert("Hello")

const ourInput = document.getElementById("ourInput")
const ourHeader = document.getElementById("ourHeader")

ourInput.addEventListener("input", amazingFunction)

function amazingFunction() {

 // alert("Hello")
 if (ourInput.value) {
  ourHeader.innerText = ourInput.value + " is cool ! "
  } else{
  ourHeader.innerText = "please enter your name."
  }




}