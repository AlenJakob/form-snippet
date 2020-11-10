import { formDomObj } from "./form";
// import { firebaseConfig } from "./firebase";
require("./firebase"); // instead of line above
const formDom = document.querySelector("#form");
const db = firebase.database().ref("messages");

formDom.innerHTML = formDomObj;

let msgFromDataBase = firebase.database().ref().child("messages");

function getDataAndAppendToDom() {
  msgFromDataBase.on("value", (snapshot) => {
    let domMsgBox = document.querySelector(".data");

    let keysList = Object.keys(snapshot.val());
    // console.log(keysList);
    let msgList = Object.values(snapshot.val());
    // console.log(msgList);
    // TRY TO CHANGE FOREACH THAT GIVE ALSO A KEY OF ELEMENT FROM FIREBASE
    keysList.forEach((e) => {
      // console.log(e);
    });

    for (let i = 0; i < keysList.length; i++) {
      console.log(keysList[i]);
      console.log(msgList[i]);
    }

    msgList.forEach(({ caseMsg, email, msg, name, phone }) => {
      const html = `
      <div class="column container is-4">
     <article class="message">
  <div class="message-header">
    <p>${name}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
 </article>
      </div>
    `;
      // add messages to dom
      domMsgBox.innerHTML += html;
    });
  });
}
getDataAndAppendToDom();

const formSubmit = document.querySelector("#formSubmit");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm();
});

function submitForm() {
  const name = getInputVal("fullNameVal");
  const phone = getInputVal("phoneVal");
  const email = getInputVal("emailVal");
  const msg = getInputVal("msgVal");
  const caseMsg = getInputVal("selectVal");
  console.log(caseMsg);
  if (caseMsg != "Select Case") {
    saveMsg(name, phone, email, msg, caseMsg);
    console.log("Message have been sent");
    return;
  } else {
    console.log("please choose case");
  }
}
// helper funciton
function getInputVal(id) {
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
    caseMsg: caseMsg,
  });
}

document.querySelector("#selectVal").addEventListener("change", (e) => {
  e.preventDefault();
});

// https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html

// ref.child(key).remove();

// To remove specific Message
// msgFromDataBase.child("-MLknVYWFhYTRFZ_Jch-").remove();
