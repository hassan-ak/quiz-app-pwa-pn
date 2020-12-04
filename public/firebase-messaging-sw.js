// Imports
// Firebase SDK imports
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// Firebase initialaization
firebase.initializeApp({
    apiKey: "AIzaSyALUY3KbMbB1GXvifAIAjJn3CYlcg1F5_0",
    authDomain: "project07a1-hassanalikhan.firebaseapp.com",
    projectId: "project07a1-hassanalikhan",
    storageBucket: "project07a1-hassanalikhan.appspot.com",
    messagingSenderId: "272482068239",
    appId: "1:272482068239:web:144e657348fc1bbc93007a"
})

// Messaging call
firebase.messaging();