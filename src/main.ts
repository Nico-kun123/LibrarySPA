import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC7ey0CwLjDiBWEFDFJKIIhqbarjwpZel0',
  authDomain: 'library-spa-bcaa8.firebaseapp.com',
  projectId: 'library-spa-bcaa8',
  storageBucket: 'library-spa-bcaa8.appspot.com',
  messagingSenderId: '537920377418',
  appId: '1:537920377418:web:f8d2da5c2da1b802180cb3',
  measurementId: 'G-N86HR887YX'
}

// Initialize Firebase
const FireApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(FireApp)

app.mount('#app')
