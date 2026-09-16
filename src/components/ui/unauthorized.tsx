"use cleint"
import Image from "next/image";
import { Button } from "./button";
import Section from "@/components/layouts/section";
import { useRouter } from "next/dist/client/components/navigation";

export default function UnauthorizedPage () {

 const router = useRouter();
 return (

 <Section>
      <div className='flex flex-row  items-center justify-center gap-4'>
<Image className='rounded-[20%]' src='/police.png' alt='Unauthorized' width={200} height={200} />
<div className='flex flex-col items-center justify-center gap-4'>
 <h1 className='text-2xl'>
 You are not authorized to access this page
</h1>
  <Button variant="outline" onClick={() => router.push('/register')}>Register</Button>

</div>
        </div>
 </Section>
 )
}