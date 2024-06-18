import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCnYOnWl0vfy4qFXkufzukAiPT_oimGM2M",
  authDomain: "getfit-f2d12.firebaseapp.com",
  projectId: "getfit-f2d12",
  storageBucket: "getfit-f2d12.appspot.com",
  messagingSenderId: "247939364639",
  appId: "1:247939364639:web:202360ba4db0e8f89b222a",
  measurementId: "G-KX60P3XSMY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");
const errorMessage = document.getElementById("error-message");
const signupErrorMessage = document.getElementById("signup-error-message");

createacctbtn.addEventListener("click", () => {
    const signupEmail = signupEmailIn.value;
    const confirmSignupEmail = confirmSignupEmailIn.value;
    const signupPassword = signupPasswordIn.value;
    const confirmSignUpPassword = confirmSignUpPasswordIn.value;

    if (signupEmail !== confirmSignupEmail) {
        signupErrorMessage.innerText = "Email fields do not match. Try again.";
        return;
    }

    if (signupPassword !== confirmSignUpPassword) {
        signupErrorMessage.innerText = "Password fields do not match. Try again.";
        return;
    }

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then(() => {
            signupErrorMessage.innerText = "";
            window.alert("Success! Account created.");
        })
        .catch((error) => {
            signupErrorMessage.innerText = error.message;
        });
});

submitButton.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            errorMessage.innerText = "";
            window.alert("Success! Welcome back!");
        })
        .catch((error) => {
            errorMessage.innerText = error.message;
        });
});

signupButton.addEventListener("click", () => {
    main.style.display = "none";
    createacct.style.display = "block";
});

returnBtn.addEventListener("click", () => {
    main.style.display = "block";
    createacct.style.display = "none";
});

const forgotPasswordLink = document.getElementById("forgot-password");

forgotPasswordLink.addEventListener("click", () => {
    const email = prompt("Enter your email address:");

    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                window.alert("Password reset email sent. Check your inbox.");
            })
            .catch((error) => {
                window.alert(error.message);
            });
    }
});
