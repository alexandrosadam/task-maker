import { create } from "zustand";
import { Action, State } from "./interface";

const useUIStore = create<State & Action>((set) => ({
  userProfile: null,
  accessTokenExpirationTime: 0,
  refreshTokenExpirationTime: 0,
  updateUserProfile: (newUserProfile) =>
    set((state) => ({ ...state, userProfile: newUserProfile })),
  updateAcceessTokenExpirationTime: (newExpirationTime) =>
    set((state) => ({ ...state, accessTokenExpirationTime: newExpirationTime })),
  updateRefreshTokenExpirationTime: (newExpirationTime) =>
    set((state) => ({ ...state, refreshTokenExpirationTime: newExpirationTime })),
}));

export default useUIStore;
