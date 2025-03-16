import { auth } from "./fb.js"
import {
    signOut, signInWithEmailAndPassword, sendPasswordResetEmail
} from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js'

export function signOutHandler() {
    document.getElementById("signout-btn").addEventListener("click", () => {
        signOut(auth)
    })
}

export function resetEmailHandler() {
    document.getElementById("resetemail-btn").addEventListener("click", () => {
        const email = document.querySelector("form input#email-in")
        sendPasswordResetEmail(auth, email["value"])
        console.log("sent reset email")
    })
}

export function formHandler() {
    const form = document.querySelector("form")
    const email = document.querySelector("form input#email-in")
    const passwd = document.querySelector("form input#password-in")
    form.addEventListener("submit", (ev) => {
        ev.preventDefault()
        signInWithEmailAndPassword(auth, email["value"], passwd["value"])
        console.log(passwd.value)
    })
}
