var firebaseConfig = {
    apiKey: "AIzaSyCxrqu6A82BNu870Dxj_EK7lTDFoXNFvf0",
    authDomain: "c94-practicewebapp.firebaseapp.com",
    databaseURL: "https://c94-practicewebapp-default-rtdb.firebaseio.com",
    projectId: "c94-practicewebapp",
    storageBucket: "c94-practicewebapp.appspot.com",
    messagingSenderId: "384032205411",
    appId: "1:384032205411:web:a93f4cb2a6062331672656",
    measurementId: "G-DT1PJBP7DB"
  };

  firebase.initializeApp(firebaseConfig);

function AddUser(){
    user_name = document.getElementById("userName").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "Adding User"
    });
    document.getElementById("h1").innerHTML="User Added";
}
