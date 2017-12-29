import firebase from 'firebase';

const config = {
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;


storage.getDownloadURL()
  .then(console.log)
  .catch(err => console.log('ERROR:', err));