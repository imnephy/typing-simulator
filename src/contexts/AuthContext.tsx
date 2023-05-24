import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import auth from '@/firebase';
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export interface IAuthContextValue {
  currentUser: User | null | undefined;
  signup: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext<IAuthContextValue | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signup,
    signIn,
    logout,
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export default AuthProvider;
