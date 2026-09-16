"use client"
import {User} from 'lucide-react'
import UnauthorizedPage from '@/components/ui/unauthorized'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useAuth} from "@/contexts/authContext";

export default function Profile() {



const {user,  loading} = useAuth();
console.log(user + 'from profile');

if(loading) {
  return <p>Loading...</p>
}


 return user?
 <Card className=" w-3/4 md:w-1/2 flex flex-col  shadow-lg ">
  <CardHeader>
    <Avatar className='w-[100px] h-[100px] rounded-full'>
      <AvatarImage  src="/placeholder-avatar.jpg" />
      <AvatarFallback><User /></AvatarFallback>
    </Avatar>

  </CardHeader>

  <CardContent>
  <p className='text-xl  font-semibold'>{user?.name}</p>
   <p className='text-lg text-muted-foreground'>{user?.email}</p>
 
    </CardContent>
 </Card> :  <UnauthorizedPage/>
}