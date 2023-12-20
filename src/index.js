import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/styles.css";
import Haiku from "./js/haiku";

function reset(){
  document.getElementById("form").reset();
}


function handleForm(e){
  e.preventDefault();
  const inputOne = document.getElementById("lineOne").value;
  const inputTwo = document.getElementById("lineSecond").value;
  const inputThree = document.getElementById("lineThird").value;
  const outputOne = document.getElementById("outputLineOne");
  const outputTwo = document.getElementById("outputLineTwo");
  const outputThree = document.getElementById("outputLineThree");
  const haikuObj = new Haiku(inputOne, inputTwo, inputThree);
  outputOne.textContent = "Number of words: " + haikuObj.numberOfWords(inputOne) + "; " + '\n' + 'Number of syllables:  ' + haikuObj.numberOfSyllable(inputOne);
  outputTwo.textContent = "Number of words: " + haikuObj.numberOfWords(inputTwo) + "; " + '\n' + 'Number of syllables: ' + haikuObj.numberOfSyllable(inputTwo);
  outputThree.textContent = "Number of words: " + haikuObj.numberOfWords(inputThree) + "; " + '\n' + 'Number of syllables: ' + haikuObj.numberOfSyllable(inputOne);
  reset();
  
}




document.getElementById("form").addEventListener("submit", handleForm);



