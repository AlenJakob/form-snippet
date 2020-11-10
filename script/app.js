import { formDomObj } from "./form";
// import { firebaseConfig } from "./firebase";
require("./firebase"); // instead of line above
const formDom = document.querySelector("#form");
const db = firebase.database().ref("messages")

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
  const caseMsg = getInputVal("selectVal");
  console.log(caseMsg);
  if (caseMsg != "Select Case") {
    saveMsg(name, phone, email, msg, caseMsg)
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

function saveMsg(name, phone, email, msg, caseMsg) {
  let newMsgRef = db.push();
  newMsgRef.set({
    name: name,
    phone: phone,
    email: email,
    msg: msg,
    caseMsg: caseMsg
  })
}


document.querySelector("#selectVal").addEventListener("change", (e) => {
  e.preventDefault()
  console.log(e.target.value);
})