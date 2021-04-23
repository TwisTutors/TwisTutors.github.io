//const { MongoClient } = require('mongodb');
var firebaseConfig = {
    apiKey: "AIzaSyChqnULJ8loLKhr1JhRkG5ki7XgtJSw2E8",
    authDomain: "login-eae5d.firebaseapp.com",
    projectId: "login-eae5d",
    storageBucket: "login-eae5d.appspot.com",
    messagingSenderId: "1071616747025",
    appId: "1:1071616747025:web:86826a2e8c7d8a52e3b3b0",
    measurementId: "G-6LM9QYBXY6"
};

var app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(app);
  
var docRef = db.collection("cities").doc("SF");

docRef.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
}).catch((error) => {
      console.log("Error getting document:", error);
});