
// capturing inputs and storing them in JS
// const nota1 = document.querySelector(".nota1");
// marOne = class, so queryselector
const markOne = document.querySelector(".markOne")
//markOne = also a class
const markTwo = document.querySelector(".markTwo");
// the button, however, has an id so we can use a different function: getelementbyid
const button = document.getElementById("button");
// class
const averageStudent = document.querySelector(".media");
// class
const averageSentence = document.querySelector(".media-frase");
// average
function averageStudents(n1, n2) {
  return ((n1 + n2) / 2)
}
// when the user clicks the button
button.addEventListener("click", function () 
{
// strings into floating numbers (parseFloat) and applying the average 
//   const parseMarkOne = parseFloat(markOne); //not happening - missing the .value at the end - check on this
// strings into numbers for markone and for marktwo, turning these "new variables" into something(classes...?)
const parseMarkOne = parseFloat(markOne.value)
const parseMarkTwo = parseFloat(markTwo.value);
const average = averageStudents(parseMarkOne, parseMarkTwo);
// textContent = text
// is averageStudent a node?
  averageStudent.textContent = average;
// variable.textContent = "text"
    if (average >= 7) 
    {
        averageSentence.textContent = "Arrasou, você passou!";
    } else 
    {
        averageSentence.textContent = "Sinto muito, você foi reprovado ):";
        }
    }
)

// Difference between querySelector and getElement byID:both of these functions are very similar in what they can do in term of DOM manipulation, but querySelector is more complex and powerful. 
// getelementbyid of course Returns a reference to the element by its ID. If the element with the specified ID is not in the document, it will returns null.
//queryselector Returns the first element within the document that matches the specified group of selectors, or null if no matches are found.
// // Capturei o botão e armazenei na variável
// const btnClicar = document.getElementById("btn")    
// // Capturar input e armazenar
// const inputValor = document.querySelector("input")

