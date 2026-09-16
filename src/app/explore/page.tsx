import {Button} from "@/components/ui/button"
import {Card,CardContent} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
export default function Explore() {

 const contents = ['Content 1','Content 2', 'Content 3', 'Content 4', 'Content 5', 'Content 6', 'Content 7', 'Content 8', 'Content 9', 'Content 10', 'blahelhe'];


 return (
<div className="flex md:h-[90vh] h-[95vh] w-full min-h-0 flex-col overflow-hidden">
 <div className="flex drop-shadow-lg h-[10%] p-4 justify-between items-center gap-4" >
<h1>Filter</h1>
<div className='w-[50%] flex flex-row gap-4'><Input className="md:w-[60%]" placeholder="Search..." />
<Button>Search</Button></div>
 </div>

<div className='flex min-h-0 flex-1 flex-col items-center gap-4 overflow-y-auto scroll-smooth border p-2'>
{contents.map((i) => <Card className='flex h-[200px] w-full shrink-0' key={i}><CardContent><p>{i}</p></CardContent></Card>)}
</div>
 </div>

 )
}