export const auth = firebase.auth();
export const loginForm = `
 <form id="login-form" class="box is-pulled-right">
 <div id="logged-as" class="subtitle has-text-black"></div>
 <div class="field">
 <p class="control has-icons-left has-icons-right">
   <input id="email" class="input" type="email" placeholder="Email" value="alen@alen.alen">
   <span class="icon is-small is-left">
     <i class="fas fa-envelope"></i>
   </span>
   <span class="icon is-small is-right">
     <i class="fas fa-check"></i>
   </span>
 </p>
</div>
<div class="field">
 <p class="control has-icons-left">
   <input id="password" class="input" type="password" placeholder="Password" value="alen02">
   <span class="icon is-small is-left">
     <i class="fas fa-lock"></i>
   </span>
 </p>
</div>
<button id="sign-in" class="button is-dark">Sign in</button>
<button id="sign-out" class="button is-dark">Sign Out</button>

 </form>
    `;
document.querySelector(".login").innerHTML = loginForm;

const formSignIn = document.querySelector("#login-form");
const signOutBtn = document.querySelector("#sign-out");
const signInBtn = document.querySelector("#sign-in");


document.querySelector("#check-user").addEventListener("click", () => console.log(auth.currentUser.email))

const email = document.querySelector("#email");
const password = document.querySelector("#password");

// Login 
formSignIn.addEventListener("submit", (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email.value, password.value).then((cred) => {
    });


});


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log("user is logged in")
        email.setAttribute("disabled", true)
        password.setAttribute("disabled", true)
        signInBtn.style.display = "none"
    } else {
        // No user is signed in.
        console.log("user is logged OUT");
    }
});

// Sign out user


signOutBtn.addEventListener("click", (e) => {
    e.preventDefault()
    auth.signOut();

    email.removeAttribute("disabled", true)
    password.removeAttribute("disabled", true)
    signInBtn.style.display = "inline-flex"
    console.log(auth.currentUser)
})
console.log("CURRENT USER LOGGED :", auth.currentUser)