import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";
// replace these with your own config values from Firebase!
const config = {
  apiKey: "AIzaSyAfJ0VmiSp4Wtc4l2F1vCCXe77qVgy_8A0",
  authDomain: "instagram-clone-b3d5e.firebaseapp.com",
  projectId: "instagram-clone-b3d5e",
  storageBucket: "instagram-clone-b3d5e.appspot.com",
  messagingSenderId: "510477477560",
  appId: "1:510477477560:web:f5d71ae3464763efe5764d",
  measurementId: "G-MX8GL3H79Q",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
export { firebase, FieldValue };
