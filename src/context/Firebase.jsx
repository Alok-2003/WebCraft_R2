import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs,getDoc ,doc } from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";




const FirebaseContext = createContext(null);


const firebaseConfig = {
    apiKey: "AIzaSyDmUIcm4kPoZF8YI307wzivjSWY3-mYuHk",
    authDomain: "hotel-60204.firebaseapp.com",
    projectId: "hotel-60204",
    storageBucket: "hotel-60204.appspot.com",
    messagingSenderId: "419924901635",
    appId: "1:419924901635:web:25316be4232420aa62b336",
    measurementId: "G-P1JCSDB7FD",
};

export const useFirebase = () => useContext(FirebaseContext); // Context hook ready
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);



export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

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
            navigate.push("/login");
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    };

    const AddNewHotel = async (id,name, location, pincode, contact, email, event,Strength, meal, images) => {
        const imageUrls = [];
        // Loop through each selected image
        for (const image of images) {
            const imageRef = ref(storage, `uploads/images/${Date.now()}-${image.name}`);
            const uploadResult = await uploadBytes(imageRef, image);
            imageUrls.push(uploadResult.ref.fullPath);
        }
        return await addDoc(collection(firestore, "Hotels"), {
            id, name, location, pincode, contact, email, event,Strength, meal,
            imageUrls,
            CreatorContact: user.phoneNumber,
        });
    };
    const CreateNewProfile = async (name, city, pincode, contact, email) => {
        return await addDoc(collection(firestore, "Profiles"), {
            name, city, pincode, contact, email,
            CreatorContact: user.phoneNumber,
        });
    };

    // console.log(user)

    const listOfHotels = () => {
        return getDocs(collection(firestore, "Hotels"))
    };
    const listOfClient = () => {
        return getDocs(collection(firestore, "Profiles"))
    };

    // const getImageURL = async (paths) => {
    //     // Array to store promises for fetching download URLs
    //     const imageURLPromises = paths.map(path => getDownloadURL(ref(storage, path)));
    //     console.log(imageURLPromises)
    //     // Wait for all promises to resolve
    //     const imageURLs = await Promise.all(imageURLPromises);

    //     return imageURLs;
    // };
    const getImageURL = (path) =>{
        return getDownloadURL(ref(storage,path));
    }

    const getHotelById = async (hotelId) => {
        console.log(hotelId);
        try {
            if (!hotelId) {
                console.error("Hotel ID is undefined or null");
                return null;
            }
            const querySnapshot = await getDocs(collection(firestore, "Hotels"));
            const hotelData = querySnapshot.docs.find(doc => doc.id === hotelId);
            if (hotelData) {
                return hotelData.data(); // Return the data of the document
            } else {
                console.log("No such document!");
                return null;
            }
        } catch (error) {
            console.error("Error getting hotel document:", error);
            throw error; // Throw the error for handling in the calling code
        }
    };
    
    
    return <FirebaseContext.Provider value={{
        isLoggedIn,
        signOut,
        AddNewHotel,
        listOfHotels,
        getImageURL,
        CreateNewProfile,
        listOfClient,
        getHotelById
    }} > {props.children} </FirebaseContext.Provider>
};