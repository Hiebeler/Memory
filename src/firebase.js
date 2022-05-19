import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBe9ad7T2aOM-IKbeQYFG9Y_MIQbrKlPlc",
    authDomain: "memory-2fcd8.firebaseapp.com",
    projectId: "memory-2fcd8",
    storageBucket: "memory-2fcd8.appspot.com",
    messagingSenderId: "434437542601",
    appId: "1:434437542601:web:7f48d4b1bad36e1ec0b318",
    measurementId: "G-CY2V0WDF32"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}