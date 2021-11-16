import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAyKEBJUEXVAgxgIMAkhdjmjXUYXB0GEqo",
    authDomain: "react-shoppinglist-1418a.firebaseapp.com",
    projectId: "react-shoppinglist-1418a",
    storageBucket: "react-shoppinglist-1418a.appspot.com",
    messagingSenderId: "484182249798",
    appId: "1:484182249798:web:9680919faa56f0999c1547"
};

firebase.initializeApp(firebaseConfig);
//const firebaseService =
export default firebase.firestore();
