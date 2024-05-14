import { EndUser } from "@/types/enduser.type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface AuthStore {
  endUser: EndUser;
  setEndUser: (endUser: EndUser) => void;
}

const useAuthStore = create<AuthStore>()(
  devtools((set) => ({
    endUser: {
      _id: "",
      username: "",
      email: "",
      password: "",
      avatar: "",
      description: "",
    },
    setEndUser: (endUser) => set({ endUser }),
  }))
);

export { useAuthStore };
