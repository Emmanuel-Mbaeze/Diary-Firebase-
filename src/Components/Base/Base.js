import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
const app= initializeApp({
    apiKey: "AIzaSyBzmPNmFiVNFXd-JnlxQZ5wisb7MKeFfvU",
    authDomain: "first-time-base.firebaseapp.com",
    projectId: "first-time-base",
    storageBucket: "first-time-base.appspot.com",
    messagingSenderId: "1008410917752",
    appId: "1:1008410917752:web:75dfc165ebaa68fd1ea68d"
})
const db = getFirestore(app)
const auth = getAuth(app)
export {db,auth}