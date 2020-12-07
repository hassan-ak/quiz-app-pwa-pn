// Imports
// Firebase Imports
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/messaging';   // for cloud messaging

// Firebase Configrations
const config = {
    apiKey: "AIzaSyALUY3KbMbB1GXvifAIAjJn3CYlcg1F5_0",
    authDomain: "project07a1-hassanalikhan.firebaseapp.com",
    projectId: "project07a1-hassanalikhan",
    storageBucket: "project07a1-hassanalikhan.appspot.com",
    messagingSenderId: "272482068239",
    appId: "1:272482068239:web:144e657348fc1bbc93007a"
}

// App initilization
firebase.initializeApp(config)

// Function export
export default firebase;