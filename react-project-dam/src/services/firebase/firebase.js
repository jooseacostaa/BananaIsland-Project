import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDuk_e0N75-B718O8BPXOrA0jOyx46SR50",
    authDomain: "banana-island-5157d.firebaseapp.com",
    projectId: "banana-island-5157d",
    storageBucket: "banana-island-5157d.firebasestorage.app",
    messagingSenderId: "468062861242",
    appId: "1:468062861242:web:4f165a94827723408a4f83",
    measurementId: "G-S85XGH0TF4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);