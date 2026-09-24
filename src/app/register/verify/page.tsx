"use client";

import { Field, FieldLabel } from "@/components/ui/field"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
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
const [errormessage, setErrorMessage] = useState('')

 const handleSubmit = async (e: any) => {
  e.preventDefault();
  setErrorMessage('')
  try {
  await verify({email: OTPuser?.email ?? '', otp});

 }catch (err) {
 setErrorMessage(err instanceof Error ? err.message : String(err))
 }}


 return ( OTPuser? <Section>
  
    <form onSubmit={handleSubmit} className="flex justify-center">

    <Field className="w-fit flex flex-col items-center justify-center gap-5">
      <FieldLabel htmlFor="digits-only">We have sent a 6-digit OTP code to your email</FieldLabel>
      <InputOTP
        id="digits-only"
        maxLength={6}
        value={otp}
        onChange={(value) => setOtp(value.replace(/\D/g, ""))}
        inputMode="numeric"
        pattern="[0-9]*"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        
        </InputOTPGroup>
      </InputOTP>
       {errormessage && <p className="md: max-w-[50vw] text-sm text-red-500" role="alert">{errormessage}</p>}
    <Button type="submit" className="max-w-[25vw] md:hidden">Verify</Button>
    </Field>
   
    

</form>

</Section> :  <Section>
 <h1>You are unauthorized <br/>  
 <Button variant="outline" type="submit" onClick={() => router.push('/register')}>Register</Button></h1>
</Section>



 )
}