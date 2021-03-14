const collegeevent = document.getElementById('ifcollegesignup')


const setupUI = (user) => {
    const loggedOutLinks = document.querySelectorAll('.logged-out')
    const loggedInLinks = document.querySelectorAll('.logged-in')
    if (user) {
        loggedOutLinks.forEach(item => item.style.display = 'none')
        loggedInLinks.forEach(item => item.style.display = 'block')

    } else {
        loggedOutLinks.forEach(item => item.style.display = 'block')
        loggedInLinks.forEach(item => item.style.display = 'none')
    }
}

var firebaseConfig = {
  apiKey: "AIzaSyChqnULJ8loLKhr1JhRkG5ki7XgtJSw2E8",
  authDomain: "login-eae5d.firebaseapp.com",
  projectId: "login-eae5d",
  storageBucket: "login-eae5d.appspot.com",
  messagingSenderId: "1071616747025",
  appId: "1:1071616747025:web:86826a2e8c7d8a52e3b3b0",
  measurementId: "G-6LM9QYBXY6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log(auth)

firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
        console.log(firebase.auth().currentUser.uid);
        setupUI(user)
        console.log(emaillogin.value)
        const collegeEvent = firebase.firestore().collection('users').where("email", "==", emaillogin.value).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data())
                var data = doc.data();
                var college = data.college;
                Boolean(college)
                console.log(college)
                if(college) {
                    console.log("leg")
                    collegeevent.style.display = 'block'
                }
            })
        })
    } else {
        collegeevent.style.display = 'none'
        setupUI()
    }
});


try {
    var sign = document.getElementById("signUp");
    sign.addEventListener("click", signUp);
}
catch(err){}

try {
    var signin = document.getElementById("signIn");
    signin.addEventListener("click", signIn)
}
catch(err){}

try {
    var update1 = document.getElementById("college");
    update1.addEventListener("click", college)
}
catch(err){}

try {
    var update1 = document.getElementById("IntroToDiscord");
    update1.addEventListener("click", IntroToDiscord)
}
catch(err){}

try {
    var signout = document.getElementById("signOut");
    signout.addEventListener("click", signOut)
}
catch(err){}

function signUp() {
    console.log("Signed up")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message))
    alert("Signed Up")
    auth.signOut()
    alert("Please Sign In now")

    }

function signIn() {
    console.log("Loging in")
    var emaillogin = document.getElementById("emaillogin")
    var passwordlogin = document.getElementById("passwordlogin")
    console.log(emaillogin.value)
    
    auth.signInWithEmailAndPassword(emaillogin.value, passwordlogin.value).then(cred => {
        console.log(cred.user)
        alert("Signed In")
    })
}

function signOut() {
    auth.signOut()
    alert("Signed Out");
}


function college() {

    var college = true;
    var userRef = firebase.firestore().collection('users').doc(emaillogin.value);

    var setWithMerge = userRef.set({
        email: email.value,
        college: college, 
    }, {merge: true})
}

function IntroToDiscord() {

    var discord = true;
    var userRef = firebase.firestore().collection('users').doc(emaillogin.value);

    var setWithMerge = userRef.set({
        email: emaillogin.value,
        discord: discord, 
    }, {merge: true})
}
