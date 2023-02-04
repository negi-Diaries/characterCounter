console.log("to see if javascript is working");
// grabbing the element
let textArea = document.getElementById('textArea');
// grabbing the total counter 
let totalCounter = document.getElementById('total-Counter');
// grabbing the remaining element
let remainingCounter = document.getElementById('remaining-Counter');
console.log(remainingCounter)

updateCounter();
// add event listener to the textarea
textArea.addEventListener('input', updateCounter);
// update counter
function updateCounter(){
   let update = totalCounter.innerHTML = textArea.value.length;
    remainingCounter.innerHTML = 100 - textArea.value.length; 
}


  




 