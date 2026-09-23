"use client"
import {User} from 'lucide-react'
import {  useRouter } from 'next/navigation';
import UnauthorizedPage from '@/components/ui/unauthorized'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useAuth} from "@/contexts/authContext";

export default function Profile() {



const {user,  loading} = useAuth();
const router =  useRouter();

if(loading) {
  return <p>Loading...</p>
}


 return user?
 <Card className="w-[90vw] h-[30vh] md:h-[70vh] flex flex-col mt-0 md:mt-auto shadow-lg">
  <CardHeader>
    <Avatar  className='w-[100px] h-[100px] rounded-full'>
      <AvatarImage  src="/placeholder-avatar.jpg" />
      <AvatarFallback><User /></AvatarFallback>
    </Avatar>

  </CardHeader>

  <CardContent>
  <p className='text-xl  font-semibold'>{user?.name}</p>
   <p className='text-sm text-muted-foreground'>{user?.email}</p>
 
    </CardContent>
 </Card> :  <UnauthorizedPage/>
}