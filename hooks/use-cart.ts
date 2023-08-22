import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import { toast } from "react-hot-toast";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void; // get individual product
  removeItem: (id: string) => void; // id product
  removeAll: () => void; // remove everything from the cart
}

const useCart = create( // persisted in local storage
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);

      if (existingItem) {
        return toast("Item already in cart.");
      }

      set({ items: [...get().items, data] });
      toast.success("Item added to cart.");
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success("Item removed from the cart.");
    },
    removeAll: () => set({ items: [] }),
  }), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
  })
) 

export default useCart;
