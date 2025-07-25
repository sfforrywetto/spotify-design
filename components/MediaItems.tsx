//3:22
"use client"

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import React from "react";
import Image from "next/image";

interface MediaItemProps {
    data: Song,
    onClick?: (id:string) => void,

}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {

    const imgUrl = useLoadImage(data)

    const handleClick = () => {
        if (onClick) {
            return onClick(data.id)
        }

        //def turn on player
    }

    return ( 
        <div onClick={handleClick} className="flex items-center cursor-pointer gap-x-3 hover:bg-neutral-300/10 w-full p-2 rounded-md ">
            <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
                <Image fill src={imgUrl || '/def_disk.png'} alt="Media Item" className="object-cover"/>
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden ">
                <p className="text-white truncate ">
                    {data.title}
                </p>
                <p className="text-neutral-400 text-sm truncate">
                    {data.author}
                </p>
            </div>
        </div>
     );
}
 
export default MediaItem;