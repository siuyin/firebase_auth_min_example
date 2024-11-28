initializeFirebase();
showLoginPrompt();
manageLoginState();

function initializeFirebase() {
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
    firebase.initializeApp(firebaseConfig);
}

function showLoginPrompt() {
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function () {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        // signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInSuccessUrl: '/',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                // signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
            },
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        // Terms of service url.
        // tosUrl: '<your-tos-url>',
        // Privacy policy url.
        // privacyPolicyUrl: '<your-privacy-policy-url>'
    };

    ui.start('#firebaseui-auth-container', uiConfig);

}

function manageLoginState() {
    // Authentication
    const auth = firebase.auth();

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            document.getElementById("user").innerText = `userid: ${uid}, user email: ${user.providerData[0].email}, currentUser: ${auth.currentUser.uid}`;
            document.getElementById('firebaseui-auth-container').style.display = "none";
            document.getElementById('user').style.display = "block";
            document.getElementById('sign-out').style.display = "block";
        } else {
            // User is signed out
            // ...
            console.log("user not signed-in");
            document.getElementById('firebaseui-auth-container').style.display = "block";
            document.getElementById("user").style.display = "none";
            document.getElementById("sign-out").style.display = "none";
        }
    });

    document.getElementById("sign-out").addEventListener("click", (evt) => {
        console.log("button pushed");
        auth.signOut().then(
            () => {
                console.log("signed out");
            }
        );
    });
}