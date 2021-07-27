import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDeqzLtAlOFQqVzccoFOTNVbffXqrfCVs4",
  authDomain: "proyectow-cbe96.firebaseapp.com",
  projectId: "proyectow-cbe96",
  storageBucket: "proyectow-cbe96.appspot.com",
  messagingSenderId: "1019594610358",
  appId: "1:1019594610358:web:ef590fbd58b81e60df7817",
  measurementId: "G-JEM7E7SNTP"
};
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
  
export default fire;