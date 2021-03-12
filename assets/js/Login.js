//R*kU^ry9!4#t

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

var signin = document.getElementById("signIn");
signin.addEventListener("click", signIn);

var update1 = document.getElementById("event1");
update1.addEventListener("click", updateuser)

var signout = document.getElementById("signOut");
signout.addEventListener("click", signOut)



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log(auth)


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log(firebase.auth().currentUser.uid);
    }
});



function signUp() {
    console.log("Signed up")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message))

        alert("Signed Up")

    }



function updateuser() {

    var event1 = "signed up";
    var userRef = firebase.firestore().collection('users').doc(this.userId);

    var setWithMerge = userRef.set({
        email: email.value,
        signedup: event1, 
    }, {merge: true})
}

function signIn() {
    console.log("Loging in")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message))

        //alert("Signed In " + email )
        

    }

function signOut() {
    auth.signOut()
    alert("Signed Out");
}

