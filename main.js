//functions that displays the value

function dis(val) {
  document.getElementById("output_screen").value+=val
}
//function that evaluates the digit and return the resul

function solve(params) {
  let x = document.getElementById('output_screen').value
  let y = eval(x)
  document.getElementById('output_screen').value= y
}
//function that clears the value

function clr() {
  document.getElementById('output_screen').value= ""
}
// function thay detects the keypress

document.addEventListener('keyup',(Event)=>{
   if (Event.key == 'Enter') {
    let x = document.getElementById('output_screen').value
    let y = eval(x)
    document.getElementById('output_screen').value= y
   }
});