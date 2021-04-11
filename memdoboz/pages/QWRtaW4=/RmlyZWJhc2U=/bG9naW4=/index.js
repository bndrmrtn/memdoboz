firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.alert("logged in")
    } else {
      // No user is signed in.
      window.alert("no user")
    }
  });

function login(){
    var userEmail = document.getElementById("id").value;
    var userPass = document.getElementById("pass").value;


    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("error" + error.message)
  });
}

