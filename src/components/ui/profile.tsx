"use client"
import {User} from 'lucide-react'
import {  useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from 'lucide-react';
import UnauthorizedPage from '@/components/ui/unauthorized'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useAuth} from "@/contexts/authContext";
import { Field, FieldContent } from './field';
import { Textarea } from './textarea';

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

  <CardContent >

  
    <p className='text-xl  font-semibold'>{user?.name}</p>
   <p className='text-sm text-muted-foreground'>{user?.email}</p>
  
    <h2><strong>Bio</strong></h2>
<div className='mx-auto my-2 flex max-h-[5vh] md:max-h-[10vh] flex-col overflow-y-auto no-scrollbar'>

  
    <p> Blahege;gh;awehgiaeThe Foundation for your Design System
Composable, accessible components with thoughtful defaults. Build your own component library with code you can customize, extend, and make your own.hg;</p>
 
</div>




    <Dialog  >
      <DialogTrigger><Button>Add post <Plus/> </Button></DialogTrigger>
      <DialogContent >
        <DialogHeader>
          <DialogTitle>Share your ideas</DialogTitle>
          <DialogDescription>
           Title
           <Field ><Textarea  ></Textarea></Field>
          </DialogDescription>
        </DialogHeader>
        <Field>
          <Textarea placeholder='Write down your thoughts here...' className='w-[70vw] h-[50vh] overflow-y-auto'></Textarea>
        </Field>
     
        <DialogFooter>
          <Button>Create</Button>
          <DialogClose><Button variant={"destructive"}>Cancel</Button></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  

 
    </CardContent>
 </Card> :  <UnauthorizedPage/>
}