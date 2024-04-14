import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


export const firebaseConfig = {
    apiKey: "AIzaSyDrPTQpcnoCAh97xr-Fz3iHdj2aTf16yH8",
    authDomain: "webcraft-b6ba7.firebaseapp.com",
    projectId: "webcraft-b6ba7",
    storageBucket: "webcraft-b6ba7.appspot.com",
    messagingSenderId: "443689788697",
    appId: "1:443689788697:web:13a503799d417b39d2d188"
};
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext); // Context hook ready
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);
    const [admin, setadmin] = useState(null);
    const navigate = useNavigate();
    console.log(user)

    // console.log(user)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        })
    }, []);

    const isLoggedIn = user ? true : false;

    const signOut = () => {
        // Sign out user
        auth.signOut().then(() => {
            setUser(null);
            navigate("/login");
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    };

    const signinWithGoogle = () => signInWithPopup(auth, googleProvider);

    const getUserDetails = () => {
        if (isLoggedIn && user) {
            const { displayName, email, photoURL } = user;
            return { displayName, email, photoURL };
        }
        return null;
    };
    
    return <FirebaseContext.Provider value={{
        isLoggedIn,
        signOut,
        signinWithGoogle,
        getUserDetails
    }} > {props.children} </FirebaseContext.Provider>
};