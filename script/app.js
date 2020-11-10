import { formDomObj } from "./form";
import { firebaseConfig } from "./firebase";
const formDom = document.querySelector("#form");
var db = firebase.database().ref("messages")

formDom.innerHTML = formDomObj;
const msgFromDataBase = firebase.database().ref().child('messages');
console.log(msgFromDataBase);

msgFromDataBase.on("child_added", snapshot => {
  console.log(snapshot.val())
  document.querySelector(".data").innerHTML = JSON.stringify(snapshot.val())
})





const formSubmit = document.querySelector("#formSubmit");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm()
});

function submitForm() {

  const name = getInputVal("fullNameVal");
  const phone = getInputVal("phoneVal");
  const email = getInputVal("emailVal");
  const msg = getInputVal("msgVal");
  const select = getInputVal("selectVal");
  console.log(select);
  if (select != "Select Case") {
    saveMsg(name, phone, email, msg, select)
    console.log("Message have been sent");
    return
  } else {
    console.log("please choose case");

  }
}
// helper funciton
function getInputVal(id) {
  ;
  return document.getElementById(id).value;
}

// save message to database

function saveMsg(name, phone, email, msg, select) {
  console.log(select);
  // let newMsgRef = db.push();
  // newMsgRef.set({
  //   name: name,
  //   phone: phone,
  //   email: email,
  //   msg: msg,
  //   select: select
  // })
}


document.querySelector("#selectVal").addEventListener("change", (e) => {
  e.preventDefault()
  console.log(e.target.value);
})