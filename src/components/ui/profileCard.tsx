"use client"

import {User} from "lucide-react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { Button } from "./button";
import {useAuth} from '@/contexts/authContext'
import { useRouter } from "next/dist/client/components/navigation";
export default function ProfileCard() {

const router = useRouter();
const {user} = useAuth()



 return user?
 <Card className="shadow-lg  items-center flex flex-row gap-4 ">
  <CardHeader >
    <Avatar onClick={() => router.push('/profile')}>
      <AvatarImage src="/placeholder-avatar.jpg" />
      <AvatarFallback><User /></AvatarFallback>
    </Avatar>
    
  </CardHeader>

  <CardContent >
    <p className='text-xs font-semibold'>{user?.name}</p>


    </CardContent>
 </Card> :  <Card className='w-full shadow-lg flex flex-col justify-center items-center'>
  <h1>You are not logged in</h1>
  <Button variant="outline" onClick={() => router.push('/register')}>Register</Button>
 </Card> 
}