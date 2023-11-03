import { getAuth, signInWithEmailAndPassword, deleteUser } from "firebase/auth";
import { app } from ".";

const auth = getAuth();
const user = auth.currentUser;


export const deleteTestUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            deleteUser(user).then(() => console.log('User deleted'))
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
