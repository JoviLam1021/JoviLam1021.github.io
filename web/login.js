const firebaseConfig = {
    apiKey: "AIzaSyAQyCtNpfPFkbOZt8bxWP0tg80YP_Pe7E4",
    authDomain: "imperial-time-325522.firebaseapp.com",
    projectId: "imperial-time-325522",
    storageBucket: "imperial-time-325522.appspot.com",
    messagingSenderId: "1035036475199",
    appId: "1:1035036475199:web:5ff8cc4ec39b452f891d8a",
    measurementId: "G-34QKXEPSWM"
  };
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signup() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("signup success");
}
function signin() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    window.location.href='首頁.html'
    //alert("signin success");
    
}
function signout() {
    auth.signOut();
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    alert("signout success");
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("active user" + email);
        window.location.href='首頁.html';
    }
    else {
       // alert("no active user found");
    }
})