import { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({})

  // logic for  user authentication(signing up)
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    setDoc(doc(db, 'users', email), {
      savedShows: [],
    })
  }

  // logic for user authenticaton(signing in)
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // logic for signing out
  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  })
  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function UserAuth() {
  return useContext(AuthContext)
}
