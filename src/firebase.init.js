
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId,
    // apiKey: "AIzaSyAj0R3gyFcLA_zn_IJ9rO-B5W0I0EyzU-M",
    // authDomain: "laptop-wearhouse.firebaseapp.com",
    // projectId: "laptop-wearhouse",
    // storageBucket: "laptop-wearhouse.appspot.com",
    // messagingSenderId: "597880224808",
    // appId: "1:597880224808:web:9fcd6ea19df9dea217c91d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;