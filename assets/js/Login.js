var firebaseConfig = {
  apiKey: "AIzaSyChqnULJ8loLKhr1JhRkG5ki7XgtJSw2E8",
  authDomain: "login-eae5d.firebaseapp.com",
  projectId: "login-eae5d",
  storageBucket: "login-eae5d.appspot.com",
  messagingSenderId: "1071616747025",
  appId: "1:1071616747025:web:86826a2e8c7d8a52e3b3b0",
  measurementId: "G-6LM9QYBXY6"
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