import { formDomObj } from "./form";
const formDom = document.querySelector("#form");

formDom.innerHTML = formDomObj;

["phoneVal", "fullNameVal", "emailVal", "msgVal"];

const name = document.querySelector("#fullNameVal");
const phone = document.querySelector("#phoneVal");
const email = document.querySelector("#emailVal");
const msg = document.querySelector("#msgVal");

console.log(name.value, phone.value, email.value);

const formSubmit = document.querySelector("#formSubmit");

formSubmit.addEventListener("submit", (ev) => {
  ev.preventDefault();
  console.log(ev.target);
//   get values 
});

function submitForm(e) {
  e.preventDefault();
}

// helper funciton
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Traversy contact form 9:40 sec
