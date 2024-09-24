const {initializeApp} = require('firebase/app');
const  {getAuth} =  require('firebase/auth');
const { getFirestore } = require('firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyDQfx4SFrjg3XMpeYcmmkJl1QWe8dc_sro",
    authDomain: "quality-thrifts.firebaseapp.com",
    projectId: "quality-thrifts",
    storageBucket: "quality-thrifts.appspot.com",
    messagingSenderId: "936931621907",
    appId: "1:936931621907:web:004a15f94a3439d2c553e6",
    measurementId: "G-6SF6CGDKKB"
  };

const app = initializeApp(firebaseConfig)
console.log(app)
const auth = getAuth(app)

const db = getFirestore(app)

export {db,app,auth};

