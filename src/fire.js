import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD5-w8k4fHr0TdS2WxIMIwlYBjlk7wKHGg",
  authDomain: "the-mike-johnson-project.firebaseapp.com",
  databaseURL: "https://the-mike-johnson-project.firebaseio.com",
  projectId: "the-mike-johnson-project",
  storageBucket: "the-mike-johnson-project.appspot.com",
  messagingSenderId: "1085183451038"
};

let fire = firebase.initializeApp(config);
let auth = firebase.auth();

// Get Elements
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');

// Click event listener
btnLogin.addEventListener('click', e => {
  auth.signInAnonymously();
});

// Chlick logout event listener
btnLogout.addEventListener('click', e => {
  auth.signOut();
});

// Auth listener
auth.onAuthStateChanged(firebaseUser => {
  console.log(firebaseUser);
  if (firebaseUser) {
    btnLogout.classList.remove('hide');
  } else {
    btnLogout.classList.add('hide');
  }
});


export default fire;
