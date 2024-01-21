import { create } from "zustand";

interface AuthModal {
  isOpen: boolean;
  setIsLogin?: undefined;
  onOpen: (param?: any) => void;
  onClose: () => void;
}

const useAuthModal = create<AuthModal>((set) => ({
  isOpen: false,
  setIsLogin: undefined,
  onOpen: (setIsLogin?: any) => set({ setIsLogin: setIsLogin, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
