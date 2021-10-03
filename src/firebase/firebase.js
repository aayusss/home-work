
import firebase from "firebase/compat/app"
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyC7R2PXLWR0kM76i3difLt7he4bDgaG4CM',
  authDomain: 'home-work-833d6.firebaseapp.com',
  projectId: 'home-work-833d6',
  storageBucket: 'home-work-833d6.appspot.com',
  messagingSenderId: '826380429281',
  appId: '1:826380429281:web:fcef196a63cacc8e08d4a0',
  measurementId: 'G-4VNVD3TMD9',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export {auth};