// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0ZikJrX6f0LBpgiDojqEkwaAKzuC_FAs",
    authDomain: "jats-fb-shopping.firebaseapp.com",
    projectId: "jats-fb-shopping",
    storageBucket: "jats-fb-shopping.appspot.com",
    messagingSenderId: "875660490192",
    appId: "1:875660490192:web:9f69d709803bf1a4ab35d5"
};

const devFirebaseConfig = {
    apiKey: "AIzaSyCv_3uj5i2xeTXVFGzTYdPvJGOm2OQBqWg",
    authDomain: "dev-jats-fb-shopping.firebaseapp.com",
    projectId: "dev-jats-fb-shopping",
    storageBucket: "dev-jats-fb-shopping.appspot.com",
    messagingSenderId: "240698618519",
    appId: "1:240698618519:web:5860f7235a5461a18eefd2"
};

// Initialize Firebase
let app;
if (process.env.NODE_ENV === 'production') {
    app = initializeApp(firebaseConfig);
} else {
    app = initializeApp(devFirebaseConfig);
}

const vapidKeyProd = "BP8EdIID-rVP4fQ0qUkjhEmhJFi2h8VcA7IavlOe7WoQ0Ww1uj0pwsuTrM7Fl_RD6NkBu3qo0UQFTKyATKfLBUE";

const vapidKeyDev = "BMyOiRw317XqWEZmGgxuS6MvkEPXpvZ4K8u6NHDt8eSIdeIPd0kbdCKkRpEOdZ_osnTtoJDSwy25HHWGmuLjRtk"

const messaging = getMessaging();

// export { app, messaging }

getToken(messaging, { vapidKey: process.env.NODE_ENV === 'production' ? vapidKeyProd : vapidKeyDev })
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

const db = getFirestore(app)

export { app, messaging, db }

