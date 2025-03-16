// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1hwF3JuL-VVgNXWiTB32ozfZuf-J4rJs",
    authDomain: "authn-test-5b853.firebaseapp.com",
    projectId: "authn-test-5b853",
    storageBucket: "authn-test-5b853.firebasestorage.app",
    messagingSenderId: "885235235050",
    appId: "1:885235235050:web:a28e8fca808e46aaea7f93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js'

const auth = getAuth()
onAuthStateChanged(auth, (user) => {
    const hdr = document.querySelector("header")
    if (user) {
        console.log(`user: ${user.email}`)
        hdr.textContent = user.email
        return
    }
    console.log("user logged out")
    hdr.textContent = "signed out"
})

export { auth }