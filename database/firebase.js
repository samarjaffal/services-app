import { AUTH_DOMAIN, API_KEY, PROJECT_ID, STORAGE_BUCKET, MESSANGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from '@env'
// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSANGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
}

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
