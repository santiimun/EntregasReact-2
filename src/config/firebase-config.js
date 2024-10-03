import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const API_KEY= import.meta.env.VITE_API_KEY
const AUTH_DOMAIN= import.meta.env.VITE_AUTH_DOMAIN
const PROJECT_ID= import.meta.env.VITE_PROJECT_ID
const STORAGE_BUCKET= import.meta.env.VITE_STORAGE_BUCKET
const MESSAGIN_SENDER_ID= import.meta.env.VITE_MESSAGIN_SENDER_ID
const APP_ID= import.meta.env.VITE_APP_ID



const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGIN_SENDER_ID,
    appId: APP_ID
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);