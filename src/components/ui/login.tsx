'use client'
import { useState } from "react"
import {useAuth} from "@/contexts/authContext"
import { Input } from "./input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardAction, CardContent,CardTitle, CardFooter } from "@/components/ui/card"
import Gsignin from "@/components/ui/googleSignIn"
import { Eye } from "lucide-react"
import {Loader} from"lucide-react"
import { EyeClosed } from "lucide-react"

export default function LoginPage({handler}: any) {


 
const {login, loading} = useAuth();
 const [showPassword, setShowPassword] = useState(false)
 const [errorMessage, setErrorMessage] = useState('')
 const [formData, setFormData] = useState({
  email: '',
  password: '',
 })


//Handler functions
const sentData = (e: any) => {
 handler(false)
 console.log('I am working from loginPage')
}


const handleChange = (e: any) => {

 setFormData((prev) => ({
  ...prev,
  [e.target.name]: e.target.value,
 }))
}


const handleSubmit = async (e: any) => {
 e.preventDefault();
 setErrorMessage('')
 try {
await login(formData);
 }
  catch (err) {
    setErrorMessage(err instanceof Error ? err.message : String(err))
 }
}


 return <Card className="shadow-lg  ">

<CardHeader className="text-center ">
 <CardTitle > Register your account </CardTitle>
 </CardHeader>

 <CardContent className="border rounded-xl shadow-lg flex flex-col mx-2" >
<form className="flex gap-4 mx-auto w-full flex-col" onSubmit={handleSubmit}> 
<label>
 <h3>Email</h3>

<Input  type='email' value={formData.email} onChange={handleChange}  required  name="email" placeholder="Enter your email" />
</label>

<label className="relative">
 <h3>Password</h3>
 <div className="relative">
  <Input className="pr-10" value={formData.password} onChange={handleChange} type={showPassword ? 'text' : 'password'} required  minLength={6} name="password" placeholder="Enter your password" />
  <Button type="button" variant="secondary" className="absolute inset-y-0 right-0 h-full w-10 p-0" onClick={() => setShowPassword((prev) => !prev)}>
   {showPassword ? <EyeClosed /> : <Eye />}
  </Button>
 </div>
</label>
{loading ?  <Button><Loader></Loader></Button> : <Button type="submit" variant={'default'} >Submit</Button>}

 {errorMessage && <p className="md: max-w-[20vw] text-sm text-red-500" role="alert">{errorMessage}</p>}
</form>

 </CardContent>

<CardFooter className="w-full justify-evenly flex flex-col gap-2 bottom-0 ">  

 <Gsignin />
 <br/>
<p>Don't have an account?<Button onClick={sentData}  variant={'link'}>Register here</Button></p>
</CardFooter>
 </Card>



}
