# Firebase authentication minimal example
I had trouble using `firebase`'s drop-in authentication as it only supported namespaced javacript and not their modular javascript.

See: https://firebase.google.com/docs/auth/web/firebaseui?authuser=0&hl=en

## Namespaced libraries supported by drop-in authentication
See Available libraries. Scroll past Modular libraries to Namespaced libraries.

https://firebase.google.com/docs/web/learn-more?authuser=0&hl=en#web_1

## Drop-in authentication currently has an issue with email/password authentication
See: https://github.com/firebase/firebaseui-web/issues/1041

Email link authentication works well:

https://github.com/firebase/firebaseui-web?tab=readme-ov-file#email-link-authentication

User class reference:

https://firebase.google.com/docs/reference/js/auth.user?hl=en&authuser=0

If you *must* use email with password authentication with the drop-in solution, then the
workaround is to turn off email enumeation protection in:

Project / Authentication / Settings / User Actions 