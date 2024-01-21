"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import useAuthModal from "@/hooks/use-auth-modal";


const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false); // prevent hydration error
  const [isLogin, setIsLogin] = useState(Cookies.get("access_token") ? true : false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const router = useRouter();
  const cart = useCart();
  const pathName = usePathname()
  const authModal = useAuthModal();

  const handleAddToCart = () => {
    const access_token = Cookies.get("access_token");
    access_token ? router.push("/cart") : toast("You have to login to continue")
  }

  const handleLogin = () => {
    const access_token = Cookies.get("access_token");
    if (access_token) {
      Cookies.remove("access_token")
      setIsLogin(!isLogin)
      if (pathName == "/cart") router.push("/")
    } else {
      authModal.onOpen(setIsLogin)
    }
    router.refresh()
  }

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={handleAddToCart} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag 
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          {isLogin ? cart.items.length : 0}
        </span>
      </Button>

      <Button onClick={handleLogin} className="flex items-center rounded-full bg-black px-2 pr-4 py-2">
        <span className="ml-2 text-sm font-medium text-white">
          {isLogin ? "Logout" : "Login"}
        </span>
      </Button>
    </div>
   );
}
 
export default NavbarActions;