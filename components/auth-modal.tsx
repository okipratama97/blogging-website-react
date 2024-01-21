"use client";

import { useState } from "react";
import { post } from "@/lib/axios";
import useAuthModal from "@/hooks/use-auth-modal";
import Modal from "./ui/modal";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const AuthModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authModal = useAuthModal();
  const router = useRouter();
  const _setIsLogin = (input: boolean) => {};
  const setIsLogin = useAuthModal((state) => state.setIsLogin) || _setIsLogin;

  const handleLogin = async () => {
    const response = await post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/customer/login`,
      { email, password }
    );
    if (!response?.access_token) toast.error("Wrong email or password");
    else {
      Cookies.set("access_token", response?.access_token);
      toast.success(email);
      setIsLogin(true);
      router.refresh();
      authModal.onClose();
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Modal
      open={authModal.isOpen}
      onClose={authModal.onClose}
      options={{ isDisableX: true }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="customer@email.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
