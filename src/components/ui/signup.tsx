"use client"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Gsignin from "@/components/ui/googleSignIn";
import {Eye, EyeClosed} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {useState} from "react"
import {useAuth} from "@/contexts/authContext";
import {Loader} from "lucide-react"

export default function SignupPage({handler}: any) {
const {login, loading} = useAuth();

//Types and interfaces
interface FormData {
  name: string;
  email: string;
  password: string;
}


//Handler functions
const sentData = (e: any) => {

  handler(true)
}

const handleChange = (e: any) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }))
}

const handleSubmit = async (e: any) => {
  e.preventDefault();
  try{
    await login(formData);
  } catch(error) {
    throw new Error('Failed to submit form data')
  }
}

const [formData, setFormData] = useState<FormData>({
  name: '',
  email: '',
  password: '',
});

  const [showPassword, setShowPassword] = useState(false)

  
 return <Card className="shadow-lg  ">

<CardHeader className="text-center ">
 <CardTitle > Register your account </CardTitle>
 </CardHeader>

 <CardContent className="border rounded-xl shadow-lg flex flex-col mx-2" >
<form className="flex gap-4 mx-auto w-full flex-col" onSubmit={handleSubmit}> 
<label>
 <h3>Username</h3>
<Input  type='text'  required minLength={3} name="name" placeholder="Enter your username" value={formData.name} onChange={handleChange} />
</label>
<label>
 <h3>Email</h3>
 <Input type='email' required name="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange} />
</label>
<label className="relative">
 <h3>Password</h3>
 <div className="relative">
  <Input className="pr-10" type={showPassword ? 'text' : 'password'} required  minLength={6} name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
  <Button type="button" variant="secondary" className="absolute inset-y-0 right-0 h-full w-10 p-0" onClick={() => setShowPassword((prev) => !prev)}>
   {showPassword ? <EyeClosed /> : <Eye />}
  </Button>
 </div>
</label>
{loading ?  <Button><Loader /></Button> : <Button type="submit" onSubmit={handleSubmit} variant={'default'} >Submit</Button>}
</form>

 </CardContent>

<CardFooter className="w-full justify-evenly flex flex-col gap-2 bottom-0 ">  

 <Gsignin />
 <br/>
<p>Already have an account?<Button onClick={sentData}  variant={'link'}>Login here</Button></p>
</CardFooter>
 </Card>
}