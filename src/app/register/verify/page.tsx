"use client";

import {useAuth} from "@/contexts/authContext"
import {Input} from "@/components/ui/input"
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useState} from "react"
import Section from "@/components/layouts/section"


export default  function VerifyPage () {
 const {OTPuser, verify} =  useAuth()
 const router = useRouter();
 const [otp, setOtp] = useState("")

 const handleSubmit =  (e: any) => {
  e.preventDefault();
  try {
   verify({email: OTPuser?.email ?? '', otp});

 }catch (err) {
  console.error('Error verifying OTP:', err);
 }}


 return ( OTPuser? <Section>
 <form onSubmit={handleSubmit}>
   <Card className='md:w-[30vw] md:h-[30vh] mx-auto justify-center p-4 flex flex-col gap-4'>
    <h1>We have sent a 6-digit OTP code to your email</h1>
    <div className='flex flex-col gap-2'>
     <label>Verification Code</label>
    <Input type='text' placeholder="Enter your OTP code here..." value={otp} required onChange={(e) => setOtp(e.target.value)} ></Input>
    <Button className='w-1/2 md:w-1/3 mx-auto' type="submit">Verify</Button>
    </div>
  </Card>
</form>
</Section> :  <Section>
 <h1>You are unauthorized <br/>  
 <Button variant="outline" type="submit" onClick={() => router.push('/register')}>Register</Button></h1>
</Section>



 )
}