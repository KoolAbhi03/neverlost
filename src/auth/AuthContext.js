import React, { useState, useContext, useEffect } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import {auth} from "./firebase"

const AuthContext = React.createContext();

function useAuth() {
  return useContext(AuthContext)
}

function AuthProvider({ children }) {
  const [user, setUser] = useState({ currentUser: null, authIsReady: false });


  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function signout() {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser({ currentUser: user, authIsReady: true })
    })
    return unSubscribe
  }, [])

  const value = {
    ...user,
    signin,
    signup,
    signout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth, AuthProvider }