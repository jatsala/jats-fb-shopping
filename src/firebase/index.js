// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";



const vapidKey = "BP8EdIID-rVP4fQ0qUkjhEmhJFi2h8VcA7IavlOe7WoQ0Ww1uj0pwsuTrM7Fl_RD6NkBu3qo0UQFTKyATKfLBUE";

const firebaseConfig = {
    apiKey: "AIzaSyA0ZikJrX6f0LBpgiDojqEkwaAKzuC_FAs",
    authDomain: "jats-fb-shopping.firebaseapp.com",
    projectId: "jats-fb-shopping",
    storageBucket: "jats-fb-shopping.appspot.com",
    messagingSenderId: "875660490192",
    appId: "1:875660490192:web:9f69d709803bf1a4ab35d5"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();

getToken(messaging, { vapidKey })
    .then(currentToken => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            // console.log('currentToken', currentToken);
            sendTokenServer(currentToken);
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    });

const sendTokenServer = (token) => {
    if (localStorage.getItem('tokenSentToServer', '1')) return;
    // TO DO: Implementar la lógica de que el servidor se almacene el token
    localStorage.setItem('tokenSentToServer', '1')
}

export const db = getFirestore(app)
