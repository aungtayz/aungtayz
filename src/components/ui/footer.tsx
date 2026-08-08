
import { Card, CardContent, CardFooter } from "./card";

export default function Footer() {
  return (
    <div
      className="fixed flex justify-center border-t w-full h-[40px] md:h-[40px] lg:h-[60px] bottom-0 backdrop-blur-lg shadow shadow-lg border left-0 z-50"
    >
      <CardContent className="flex gap-10 px-5 flex-row justify-evenly  items-center">
        <p className="text-[5px] md:text-xs lg:text-2xs">
          Copyright © 2023 Luxavian.<br/> All rights reserved.
        </p>
        <p className="text-[10px] md:text-sm lg:text-xs">Terms of Use</p>
        <p className="text-[10px] md:text-sm lg:text-xs">Privacy Policy</p>
      </CardContent>
    </div>
  );
}