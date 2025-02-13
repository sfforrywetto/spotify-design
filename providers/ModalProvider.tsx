"use client"

import AuthModal from "@/components/AuthModal";
import UploadModalCom from "@/components/UploadModalCom";

import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null
    }

    return (
        <>
            <AuthModal />
            <UploadModalCom />
        </>

    );
}
 
export default ModalProvider;