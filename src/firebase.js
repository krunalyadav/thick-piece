import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAJFAOpFP2MuGE5hF0nudHni3me_Qj26Vk',
  authDomain: 'think-piece-e7492.firebaseapp.com',
  databaseURL: 'https://think-piece-e7492.firebaseio.com',
  projectId: 'think-piece-e7492',
  storageBucket: 'think-piece-e7492.appspot.com',
  messagingSenderId: '183107141377',
  appId: '1:183107141377:web:3dfb37b27ba3025812a500',
  measurementId: 'G-1FLZBNGDBJ',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

window.firebase = firebase;

export default firebase;
