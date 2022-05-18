// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBMOKkf4aIyWpnTWTcoX1KIxqXThzIpK98',
  databaseURL: 'https://survey-auth-f6fb5-default-rtdb.firebaseio.com',
  authDomain: 'survey-auth-f6fb5.firebaseapp.com',
  projectId: 'survey-auth-f6fb5',
  storageBucket: 'survey-auth-f6fb5.appspot.com',
  messagingSenderId: '782091248117',
  appId: '1:782091248117:web:3a54ef2022fa49f4e780bc',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
