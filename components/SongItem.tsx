"use client"

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
    data: Song,
    onClick: (id: string) => void,

}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {

    const imagePath = useLoadImage(data)

    return ( 
        <div 
            onClick={() => onClick(data.id)} 
            className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-300/5 cursor-pointer hover:bg-neutral-300/10 transition p-3 "
        >
            <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                <Image className="object-cover" src={ imagePath || 'https://xmyxnmbwcfswaipmzoau.supabase.co/storage/v1/object/public/images/image-Lady%20Brown-luhatgam'} alt="Image" fill />
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1 justify-between">
                <p className="font-semibold truncate w-full ">
                    {data.title}
                </p>
                <p className="text-neutral-400 text-sm pb-4 w-full trunacate ">
                    {data.author}
                </p>
            </div>
            <div className="absolute bottom-7 right-4 ">
                <PlayButton />
            </div>
        </div>
     );
}
 
export default SongItem;