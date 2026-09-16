"use client"
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function LogoutButton( ) {
 const router = useRouter();

const handleLogout = async () => {
try {
 const response = await fetch('http://localhost:5500/api/v1/auth/logout',{
  credentials: 'include',
  method: 'POST'
 })

 if(!response.ok) {
  throw new Error('Logout failed')
 }

 router.push('/')
} catch(err) {
 alert('An error occurred during logout. Please try again.')
 console.error('Error during logout:', err)
}
}

 return (
  <Button onClick={handleLogout} variant={"outline"} >
   Logout
  </Button>
 )
}