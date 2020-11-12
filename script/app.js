import { formDomObj } from "./formMsg";
import { alertMsg } from "./msg/showMsg"

// import { firebaseConfig } from "./firebase";
require("./firebase"); // instead of line above
require("./msg/msgAlert")
require("./loginForm")
const formDom = document.querySelector("#form");
const db = firebase.database().ref("messages");

formDom.innerHTML = formDomObj;

let msgFromDataBase = firebase.database().ref().child("messages");

let domMsgBox = document.querySelector(".data");

function getDataAndAppendToDom() {
  msgFromDataBase.on("value", (snapshot) => {

    let keysList = Object.keys(snapshot.val());
    let msgList = Object.values(snapshot.val());

    if (firebase.auth().currentUser === null) {
      domMsgBox.innerHTML = `
      <div class="title">There is no info</div>
      `;
    } else if (firebase.auth().currentUser != null) {
      msgList.forEach(({ subject, email, msg, name, phone }, id) => {

        const html = `
    <div data-id="${keysList[id]}">
   <article class="message panel is-info">
  <div class="message-header ">
    <p>${name}</p>
    <p>${keysList[id]}</p>
    <button class="delete-msg delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
  <ul class="mb-5 panel">

  <a class="panel-block">
  <span class="panel-icon">
    <i class="fas fa-user" aria-hidden="true"></i>
  </span>
 <span> Name:<b> ${name}</b></span>
</a>

<a class="panel-block">
  <span class="panel-icon">
    <i class="fas fa-envelope" aria-hidden="true"></i>
  </span>
  <span> Email:<b> ${email}</b></span>
</a>

<a class="panel-block">
  <span class="panel-icon">
    <i class="fas fa-phone" aria-hidden="true"></i>
  </span>
  <span> Mobile:<b> ${phone}</b></span>
</a>

<a class="panel-block">
  <span class="panel-icon">
    <i class="fas fa-book" aria-hidden="true"></i>
  </span>
 <span> Subject:<b> ${subject}</b></span>
</a>
</ul>
    <p class="subtitle box is-info"> ${msg}</p>
      <div class="column is-4">
  </div>
  </div>
 </article>
      </div>
    `;
        // add messages to dom
        domMsgBox.innerHTML += html;

        const removeBtns = document.querySelectorAll(".delete-msg");
        removeBtns.forEach(btn => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            domMsgBox.innerHTML = ``;
            const divRemove = e.target.closest('div[data-id]');
            const getID = divRemove.getAttribute("data-id")
            console.log(getID);
            msgFromDataBase.child(getID).remove()
          })
          
        })

      });
    }
  });


}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.querySelector("#logged-as").innerHTML = `Account: <b>${user.email}</b>`
    getDataAndAppendToDom();
  } else {
    // No user is signed in.
    document.querySelector("#logged-as").innerHTML = ``;
    getDataAndAppendToDom();
  }
});

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
  const subject = getInputVal("selectVal");
  if (subject != "Select Case") {
    saveMsg(name, phone, email, msg, subject);
    domMsgBox.innerHTML = ``;
    getDataAndAppendToDom();
    console.log("Message have been sent");
    return;
  } else if (subject === "Select Case") {
    alertMsg();

    console.log("please choose case");
  }

}
// helper funciton
function getInputVal(id) {
  return document.getElementById(id).value;
}

// save message to database

function saveMsg(name, phone, email, msg, subject) {
  let newMsgRef = db.push();
  newMsgRef.set({
    name: name,
    phone: phone,
    email: email,
    msg: msg,
    subject: subject,
  });
}

document.querySelector("#selectVal").addEventListener("change", (e) => {
  e.preventDefault();
});


// Remove Message



// https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html

// ref.child(key).remove();

// To remove specific Message
// msgFromDataBase.child("-MLknVYWFhYTRFZ_Jch-").remove();
