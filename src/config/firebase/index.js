import firebase from "firebase/app"
//lihat di firebase-webnya
import "firebase/auth"
//lihat di firebase-webnya
// import "firebase/firestore"
import "firebase/database"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCmyfGI-pn3wYhCR2dCYUmpKrS7bkommA",
  authDomain: "simple-notes-firebase-d39f8.firebaseapp.com",
  databaseURL: "https://simple-notes-firebase-d39f8.firebaseio.com",
  projectId: "simple-notes-firebase-d39f8",
  storageBucket: "simple-notes-firebase-d39f8.appspot.com",
  messagingSenderId: "504813349699",
  appId: "1:504813349699:web:b1477fc69cbaf12fa35df6",
  measurementId: "G-VWL73STVGN"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const database = firebase.database()
// firebase.analytics()

export default firebase
