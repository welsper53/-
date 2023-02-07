// 1. npm 설치 - 콘솔에서 작업
// npm install firebase


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFLQr3dtiya-AK4YKNDUg-svEPb3Z9O9Q",
    authDomain: "kh-230207.firebaseapp.com",
    projectId: "kh-230207",
    storageBucket: "kh-230207.appspot.com",
    messagingSenderId: "476381032008",
    appId: "1:476381032008:web:404aa38f54893230cdb27d"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// console.log(firebaseApp);