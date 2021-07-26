import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyCN6gsV4D7M2xCPYUWB0gPd1MEWckWz7TM",
    authDomain: "tecnicaw-5c837.firebaseapp.com",
    projectId: "tecnicaw-5c837",
    storageBucket: "tecnicaw-5c837.appspot.com",
    messagingSenderId: "597704602079",
    appId: "1:597704602079:web:5fc7e40839fc1213c3d46a",
    measurementId: "G-3XWK31WZ20"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;