const button = document.querySelector("button");
const form = document.querySelector("form");
const input = document.querySelector("input");

function handleClick(e) {
  console.log(e.target.textContent);
  console.log(e.type);
  console.log(e.target);
}

function sendForm(e) {
  e.preventDefault(); // Evita que la página se recargue
  const name = e.target.elements.name.value
  if(name == ""){
    console.log(" todos los campos son obligatorios");
  }
  console.log("Form submitted");
}

button.addEventListener("mouseup", handleClick);

form.addEventListener("submit", sendForm);

input.addEventListener("input", (e) => {  
    console.log(e.target.value);
 })

/* eventos del teclado */
document.addEventListener("keydown", (e) => {
  if (e.code === "Digit8") {
    document.body.style.backgroundColor = "brown";
    sendForm(e);
  }
});
