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
var app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
db = firebase.firestore(app);

console.log(auth)


db.collection("Discord")
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data().users);
        document.getElementById("discordusers").innerHTML = doc.data().users
    });
})
.catch((error) => {
    console.log("Error getting documents: ", error);
});


firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
        console.log(firebase.auth().currentUser.uid);
        setupUI(user)

        
    } else {
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
    var collegeup = document.getElementById("college");
    collegeup.addEventListener("click", college)
}
catch(err){}

try {
    var recollege = document.getElementById("removecollege");
    recollege.addEventListener("click", removecollege)
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
    var UUIDUSER = firebase.auth().currentUser.uid
    console.log("Signed up")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message))
    alert("Signed Up")
    auth.signOut()
    alert("Please Sign In now")

    var UUIDUSER = firebase.auth().currentUser.uid
    var userRef = firebase.firestore().collection('users').doc(uuid);

    var setWithMerge = userRef.set({
        email: emaillogin.value,
        college: false,
        discord: false,
        uuid: UUIDUSER,
    }, {merge: true})

    }

function signIn() {
    console.log("Loging in")
    var emaillogin = document.getElementById("emaillogin")
    var passwordlogin = document.getElementById("passwordlogin")
    console.log(emaillogin.value)
    
    auth.signInWithEmailAndPassword(emaillogin.value, passwordlogin.value).then(cred => {
        console.log(cred.user)
        alert("Signed In")
        var UUIDUSER = firebase.auth().currentUser.uid
        var userRef = firebase.firestore().collection('users').doc(UUIDUSER);
    
        var setWithMerge = userRef.set({
            email: emaillogin.value,
            uuid: UUIDUSER,
        }, {merge: true})
    })
    
}

function signOut() {
    auth.signOut()
    alert("Signed Out");
}



function college() {
    firebase.firestore().collection('collegesignups').where("collegesignups", "==", "collegesignups").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data())
            var data = doc.data();
            var collegesignups = data.collegesignups;
            var collegesignupsadded = collegesignups + 1 
            var UUIDUSER = firebase.auth().currentUser.uid
            var college = true;
            var userRef = firebase.firestore().collection('users').doc(UUIDUSER);
        
            userRef.set({
                college: college, 
            }, {merge: true})
        
            var userRef = firebase.firestore().collection('collegesignups').doc('collegesignups');
        
            userRef.set({
                collegesignups: collegesignupsadded,
            }, {merge: true})
        })

})

function removecollege() {
    var UUIDUSER = firebase.auth().currentUser.uid
    var college = false;
    var userRef = firebase.firestore().collection('users').doc(UUIDUSER);

    var setWithMerge = userRef.set({
        college: college, 
    }, {merge: true})
}

function IntroToDiscord() {
    var UUIDUSER = firebase.auth().currentUser.uid
    var discord = true;
    var userRef = firebase.firestore().collection('users').doc(UUIDUSER);

    var setWithMerge = userRef.set({
        discord: discord, 
    }, {merge: true})
}}