import { create } from "zustand";

interface AuthStore {
  user: string;
  login: (userName: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (userName) => set({ user: userName }),
  logout: () => set({ user: "" }),
}));

export default useAuthStore;
