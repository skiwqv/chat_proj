import firebase from 'firebase';
import 'firebase/firestore';

const Firebase = firebase.initializeApp();
export const db = Firebase.firestore();