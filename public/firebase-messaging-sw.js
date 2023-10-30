importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyA0ZikJrX6f0LBpgiDojqEkwaAKzuC_FAs",
    authDomain: "jats-fb-shopping.firebaseapp.com",
    projectId: "jats-fb-shopping",
    storageBucket: "jats-fb-shopping.appspot.com",
    messagingSenderId: "875660490192",
    appId: "1:875660490192:web:9f69d709803bf1a4ab35d5"
})

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Titulo de la Notificación';
//     const notificationOptions = {
//         body: 'Este es el body',
//         icon: 'https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png'
//     };

//     self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });