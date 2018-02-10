import Rebase from 're-base';
import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCZ2XWMwFIIcPzqvxRTmz4c9ysQTQW4V5M",
  authDomain: "climbing-app-821ac.firebaseapp.com",
  databaseURL: "https://climbing-app-821ac.firebaseio.com",
  projectId: "climbing-app-821ac",
  storageBucket: "climbing-app-821ac.appspot.com",
  messagingSenderId: "574772061877"
})

const db = firebase.database(app)
const base = Rebase.createClass(db)

export default base;
