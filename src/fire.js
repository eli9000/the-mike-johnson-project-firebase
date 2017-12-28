import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD5-w8k4fHr0TdS2WxIMIwlYBjlk7wKHGg",
  authDomain: "the-mike-johnson-project.firebaseapp.com",
  databaseURL: "https://the-mike-johnson-project.firebaseio.com",
  projectId: "the-mike-johnson-project",
  storageBucket: "the-mike-johnson-project.appspot.com",
  messagingSenderId: "1085183451038"
};

var fire = firebase.initializeApp(config);

export default fire;