import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState, } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name,photoURL:photo
        })
        
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

     useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("on Auth state change", currentUser);
         setUser(currentUser);
        //  setLoading(false);
       });
       return () => {
         unSubscribe();
       };
     }, []);

    const authInfo = { user, createUser, updateUserProfile, signIn, logOut };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;
