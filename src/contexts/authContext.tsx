"use client";
import { createContext,useState, useEffect, useContext } from "react";
import {useRouter} from 'next/navigation';

type User = { 
 
 name: string;
 email: string;
}

type AuthContextType = {

 OTPuser: User | null;
 user: User | null;
 login: (credentials: {email: string; password: string, name?: string}) => Promise<void>;
 logout: () => Promise<void>;
 verify: (credentials: {email: string; otp: string}) => Promise<void>;
 
 setUser: React.Dispatch<React.SetStateAction<User | null>>;
loading: boolean;

}

const AuthContext = createContext<AuthContextType | null>(null);




export const AuthProvider = ({children}: {children: React.ReactNode}) => {
 const [OTPuser, setOTPuser] = useState<User | null>(null);
 const [user, setUser] = useState<User | null>(null);
 const [loading, setLoading] = useState(true);
 const router = useRouter();

 useEffect(() => {
  const fetchUser = async () => {
   try {
    const response = await fetch('http://localhost:5500/api/v1/users/profile',{
     credentials: 'include',
    });
    console.log('Response from profile fetch:', response);
    if(!response.ok) {
     setUser(null);
     setLoading(false)
     return
    }
    const data = await response.json();
    const fetchedUser = data?.data?.user ?? data?.user ?? null;
    if(!fetchedUser) {
      setUser(null)
    } else {
      setUser(fetchedUser)
    }
   } catch(err) {
    setUser(null);
   } finally {
    setLoading(false);
   }
  };
  fetchUser();
 }, []);






const login = async (credentials: {email: string; password: string, name?: string}) => {
   try {
      let endpoint= 'http://localhost:5500/api/v1/auth/login';
      if(credentials.name) {
         endpoint = 'http://localhost:5500/api/v1/auth/signup'
      }
      const response = await fetch(endpoint, {
         credentials: 'include', 
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(credentials)
      })
      if(!response.ok) {
         throw new Error(`Authentication failed with status ${response.status}`)
      }
      const data = await response.json();
      const loggedInUser = data?.data?.user ?? data?.user ?? null;

      if(endpoint.includes('signup')) {
         if(!loggedInUser) {
            throw new Error('No temporary user returned from signup response')
         }

         setUser(null)
         setOTPuser(loggedInUser);
         setLoading(false)
         router.replace('/register/verify')
         return
      }

      if(!loggedInUser) {
         throw new Error('No user returned from auth response')
      }

      setUser(loggedInUser)
      setLoading(false)
      router.replace('/profile')

   } catch(err) {
      setUser(null)
      setLoading(false)
      throw new Error('Something went wrong with: ' + err)
   }
}

const logout = async () => {
 try {
   const response = await fetch('http://localhost:5500/api/v1/auth/logout', {
    method: 'POST',
    credentials: 'include'
  });

  if(!response.ok) {
    throw new Error('Logout failed');
  }

  setUser(null)
  setLoading(false)
  router.replace('/')
 } catch(err) {
  console.error('Logout failed', err);
   throw new Error('Logout failed');
 }

}

const verify = async(credentials: {email: string; otp: string}) => {

try {
   const response = await fetch('http://localhost:5500/api/v1/auth/verify', {
      credentials: 'include',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
   })

   const data = await response.json();
   const verifiedUser = data?.data?.user ?? data?.user ?? null;

   if(!response.ok) {
      throw new Error(`Verification failed with status ${response.status}`)
   }

   if(!verifiedUser) {
      throw new Error('No user returned from verification response')
   }

   setOTPuser(null);
   setUser(verifiedUser);
   setLoading(false);
   router.replace('/profile');
} catch(err) {
   console.error('Verification failed', err);
}

}

 return (
   <AuthContext.Provider value={{user,verify, setUser, OTPuser, login, logout, loading}}>
      {children}
   </AuthContext.Provider>
 )
}

export const useAuth = () => {
 const context = useContext(AuthContext);
 if(!context) {
  throw new Error("useAuth must be used within an AuthProvider");
 }

 return context;
}