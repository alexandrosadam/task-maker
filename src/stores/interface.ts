import { UserProfile } from "types/entities";

export type State = {
  userProfile: UserProfile | null;
  accessTokenExpirationTime: number;
  refreshTokenExpirationTime: number;
};

export type Action = {
  updateUserProfile: (newUserProfile: UserProfile) => void;
  updateAcceessTokenExpirationTime: (newExpirationTime: number) => void;
  updateRefreshTokenExpirationTime: (newExpirationTime: number) => void;
};
