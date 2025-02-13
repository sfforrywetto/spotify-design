"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";

interface HeaderProps {
    children: React.ReactNode,
    className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter()
    const authModel = useAuthModal()

    const supabaseClient = useSupabaseClient()

    const { user } = useUser()

    const handelLogout = async () => {
        const { error } = await supabaseClient.auth.signOut()

        router.refresh()

        if (error) {
            toast.error(error.message)
        } else {
            toast.success('Logged out!')
        }
    }

    return ( 
        <div className={twMerge("h-fit bg-gradient-to-b from-[#115599] p-6", className)}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition " onClick={() => router.back()}>
                        <RxCaretLeft className="text-white" size={30}/>
                    </button>
                    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition " onClick={() => router.forward()}>
                        <RxCaretRight className="text-white" size={30}/>
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full p-2 bg-white items-center jaustify-center hover:opacity-75 transition">
                        <HiHome className="text-black" size={20}/>
                    </button>
                    <button className="rounded-full p-2 bg-white items-center jaustify-center hover:opacity-75 transition">
                        <BiSearch className="text-black" size={20}/>
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    {user ? (
                        <div className="flex gap-x-4 items-center ">
                            <Button onClick={handelLogout} className="bg-white px-6 py-2">
                                Logout
                            </Button>
                            <Button onClick={() => router.push('/acc')} className="bg-white ">
                                <FaUserAlt />
                            </Button>
                        </div>
                    ): (
                    <>
                    <div>
                        <Button onClick={authModel.onOpen} className="bg-transparent text-neutral-300 font-medium">
                            Sign Up
                        </Button>
                        <Button onClick={authModel.onOpen} className="bg-white px-6 py-2">
                            Log in
                        </Button>
                    </div>
                    </> )}
                </div>
            </div>
            {children}
        </div>
     );
}
 
export default Header;