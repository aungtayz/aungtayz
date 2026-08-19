"use client"

import {Button} from "@/components/ui/button"
import {useRouter} from "next/navigation"
import {Card, CardHeader, CardAction, CardContent,CardTitle } from "@/components/ui/card"
import { ModeToggle } from "./themeToggle"
import Image from "next/image"
import AvatarDropDown from "./avatardrop"
import { SidebarTrigger } from "./sidebar"
import Link from "next/dist/client/link"

export default function Navbar() {
 
	const router = useRouter();

return (
	<div  className="flex backdrop-blur-xl top-0 left-0 sticky z-50 h-[5vh] md:h-[10vh] justify-between flex-row w-full gap-4 shadow shadow-lg items-center">
		
  
  <div className=" backdrop-blur-lg rounded-xl shadow-lg px-2 gap-3 h-[50px] flex flex-row items-center justify-center"> 
			<SidebarTrigger></SidebarTrigger>
			<Image onClick={() => router.push('/')} src="/lux.png" alt="Luxavian Logo" width={40} height={40} className="cursor-pointer rounded-full"/>
			<h1><span className="text-amber-400 text-size-lg">Lux</span>avian</h1>
		</div>
<div className="flex backdrop-blur-lg justify-evenly gap-2">
	<Button variant={"link"} ><Link href={'/explore'}>Explore</Link></Button>
			<AvatarDropDown	/>
		<ModeToggle/>

</div>
	</div>
)


}
//