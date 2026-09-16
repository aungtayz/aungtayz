"use client"
import {useState} from "react"
import LoginPage from "@/components/ui/login"
import SignupPage from "@/components/ui/signup"


export default function RegisterPage() {
const [isLogin, setIsLogin] = useState(false)

const handler = (childData: any) => {
  setIsLogin(childData)
  console.log(childData)
}


return (
 isLogin ? <LoginPage handler={handler} /> : <SignupPage handler={handler}  />
)


}