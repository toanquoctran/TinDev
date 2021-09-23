import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC27hPF4NfidxXi5youku7BJJ9gI07KGH0',
  authDomain: 'tinder-521cd.firebaseapp.com',
  projectId: 'tinder-521cd',
  storageBucket: 'tinder-521cd.appspot.com',
  messagingSenderId: '686992991827',
  appId: '1:686992991827:web:87b4d3ca0f16f3453e88a6',
  measurementId: 'G-TDHBXEYRYF',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
