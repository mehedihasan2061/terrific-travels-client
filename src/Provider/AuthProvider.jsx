import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState, } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading,setLoading]=useState(true)



  const googleProvider = new GoogleAuthProvider()
  const githubProvider=new GithubAuthProvider()
    
  const createUser = (email, password) => {
      setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

  const updateUserProfile = (name, photo) => {
      setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name,photoURL:photo
        })
        
    }

  const signIn = (email, password) => {
      setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

  const logOut = () => {
      setLoading(true)
        return signOut(auth)
  }
  
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }

  const gitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth,githubProvider)
  }

     useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("on Auth state change", currentUser);
         setUser(currentUser);
         setLoading(false);
       });
       return () => {
         unSubscribe();
       };
     }, []);

    const authInfo = {
      user,
      createUser,
      updateUserProfile,
      signIn,
      logOut,
      googleLogin,
      gitHubLogin,
      loading
    };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;
