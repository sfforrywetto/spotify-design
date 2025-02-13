"use client"

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
    image: string,
    name:string, 
    href:string,
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
    
    const router = useRouter()

    const OnClick = () => {
        router.push(href)
    }

    return ( 
        <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4 " onClick={OnClick}>
            <div className="relative min-h-[64px] min-w-[64px]">
               <Image className="objext-cover" fill src={image} alt="Image"/>
            </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>
            <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-[#115599] p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
                <FaPlay className="text-white "/>
            </div>
        </button>
     );
}
 
export default ListItem;