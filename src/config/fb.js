import { initializeApp, firebase} from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import  Constants from "expo-constants";
import 'firebase/firestore'; 



const firebaseConfig = {
  apiKey: "AIzaSyDifl5oISyCv8lBa73ftsBKvTkM97YkldU",
  authDomain: "appmoviles-8b50c.firebaseapp.com",
  projectId: "appmoviles-8b50c",
  storageBucket: "appmoviles-8b50c.appspot.com",
  messagingSenderId: "621963418531",
  appId: "1:621963418531:web:2ff2a854bc65f9aec71816",
  measurementId: "G-6LSRWSFDFR"
};



initializeApp(firebaseConfig);

export const database = getFirestore();