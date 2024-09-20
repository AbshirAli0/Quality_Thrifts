import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

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
  const auth = getAuth(app)

  export {auth};