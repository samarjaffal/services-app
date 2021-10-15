// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAJHtOnLLlxnv_AcjGAspC3i4yoXK5fC0A',
  authDomain: 'servicesapp-9b8a0.firebaseapp.com',
  projectId: 'servicesapp-9b8a0',
  storageBucket: 'servicesapp-9b8a0.appspot.com',
  messagingSenderId: '490157409790',
  appId: '1:490157409790:web:e26edcf2f5c49ed69a2caf',
  measurementId: 'G-Y5X6055K33'
}

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
