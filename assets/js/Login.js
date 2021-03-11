
require('dotenv').config();

var firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

var sign = document.getElementById("signUp");
sign.addEventListener("click", signUp);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    console.log("kill me")
    const auth = firebase.auth();


function signUp() {
    console.log("kill me again")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message))

        alert("Signed Up")
    }