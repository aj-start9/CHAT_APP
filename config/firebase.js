import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCGFgjCI489CO8W_BZpu49u6qtOzAMd3UM",
    authDomain: "expo-chat-app-907cf.firebaseapp.com",
    projectId: "expo-chat-app-907cf",
    storageBucket: "expo-chat-app-907cf.appspot.com",
    messagingSenderId: "460142010104",
    appId: "1:460142010104:web:3549538e4cc6e5ecf1a50d",
    measurementId: "G-K4MYT463JC",
    databaseURL: "https://expo-chat-app-907cf-default-rtdb.firebaseio.com/",
    //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();