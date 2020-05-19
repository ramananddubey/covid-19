import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBvNKhz9RnsH0Zlzhxbcy8ac5c4vnnI9bc",
  authDomain: "covid-19-database-e9e00.firebaseapp.com",
  databaseURL: "https://covid-19-database-e9e00.firebaseio.com",
  projectId: "covid-19-database-e9e00",
  storageBucket: "covid-19-database-e9e00.appspot.com",
  messagingSenderId: "25038932671",
  appId: "1:25038932671:web:fa80626301c8fdc454540a",
  measurementId: "G-ZJWF8CBVR1"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;