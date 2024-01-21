"use client";

import { useState } from "react";
import { post } from "@/lib/axios";
import useAuthModal from "@/hooks/use-auth-modal";
import Modal from "./ui/modal";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


const AuthModal = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const authModal = useAuthModal()
    const router = useRouter();
    const _setIsLogin = (input: boolean) => {}
    const setIsLogin = useAuthModal((state) => state.setIsLogin) || _setIsLogin

    const handleLogin = async () => {
        const response = await post(`${process.env.NEXT_PUBLIC_API_URL}/auth/customer/login`, { email, password })
        if (!response?.access_token) toast.error("Wrong email or password")
        else {
          Cookies.set("access_token", response?.access_token)
          toast.success(email)
          setIsLogin(true)
          router.refresh()
          authModal.onClose()
        }
        setEmail("")
        setPassword("")
    }
    
    return (
    <Modal
      open={authModal.isOpen}
      onClose={authModal.onClose}
      options={{isDisableX: true}}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 sm:grid-cols-12 lg:gap-x-8">
        <form>
          <label>
            Email: <input required type="text" name="email" className="border-solid border-black" onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            Password: <input required type="password" name="password" className="border-solid border-black" onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <input type="button" value="Submit" onClick={handleLogin}/>
        </form>
      </div>
    </Modal>
    )
}

export default AuthModal