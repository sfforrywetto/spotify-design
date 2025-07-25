"use client"

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai"
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItems";

interface LibProps {
    songs: Song[]
}

const Lib: React.FC<LibProps> = ({ songs }) => {
    const AuthModal = useAuthModal();
    const UploadModal = useUploadModal()

    const { user, subscription } = useUser()

    const onClick = () => {
        if (!user) {
            return AuthModal.onOpen()
        }

        return UploadModal.onOpen()
    }

    return ( 
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2 ">
                    <TbPlaylist size={26} className="text-neutral-400" />
                    <p className="text-neutral-400 font-medium text-md">
                        Your Lib
                    </p>
                </div>
                <AiOutlinePlus onClick={onClick} size={20} className="text-neutral-400 cursor-pointer hover:text-white transition "/>
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3 ">
                {songs.map((item) => (
                    <MediaItem onClick={() => {}} key={item.id} data={item}/>
                ))}
            </div>
        </div>
     );
}
 
export default Lib;