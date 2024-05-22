import { BaseModel } from "../../models/base-model.model";
import { CustomerWalletType } from "../wallet/wallet.model";

export enum CustomerCodes {
  wonner = "wonner"
}

export enum CustomerStatus {
  ACTIVE = "ACTIVE",
  DEACTIVED = "DEACTIVED",
}

export interface Customer extends BaseModel {
  username?: string;
  address?: string;
  referral?: string;
  shortUrl?: string;
  activedAt?: Date;
  role?: string;
  nonce?: string;
  addressIp?: string; // address

  bannerUrl?: string;
  avatarUrl?: string;
  approved?: boolean;

  dangerous?: boolean;

  walletType?: CustomerWalletType;
  status?: CustomerStatus;

  level?: number;
  currentExp?: number;

  piWallet?: string;
  telegram?: string;

  email?: string;

  pendingAddress?: string;
  pendingAddressVerified?: boolean;

  invitationCode?: string
}

export const setCustomerToken = (token: string, temp = false) => {
  // console.log('token',token);
  if (temp) {
    sessionStorage.setItem("x-token", token);
  } else {
    localStorage.setItem("x-token", token);
  }
};

export const clearCustomerToken = () => {
  localStorage.removeItem("x-token");
  sessionStorage.removeItem("x-token");
};

export const getCustomerToken = (temp = false) => {
  return localStorage.getItem("x-token") || sessionStorage.getItem("x-token") || "";
};

export const getUserToken = (temp = false) => {
  return localStorage.getItem("user-token") || sessionStorage.getItem("user-token") || "";
};

export const setReferralCode = (token: string, temp = false) => {
  // console.log('token',token);
  if (temp) {
    sessionStorage.setItem("referral", token);
  } else {
    localStorage.setItem("referral", token);
  }
};

export const clearReferralCode = () => {
  localStorage.removeItem("referral");
  sessionStorage.removeItem("referral");
};

export const getReferalCode = (temp = false) => {
  return localStorage.getItem("referral") || sessionStorage.getItem("referral") || "";
};

export const setSignToken = (token: string, temp = false) => {
  // console.log('token',token);
  if (temp) {
    sessionStorage.setItem("sigtoken", token);
  } else {
    localStorage.setItem("sigtoken", token);
  }
};

export const clearSignToken = () => {
  localStorage.removeItem("sigtoken");
  sessionStorage.removeItem("sigtoken");
};

export const getSignToken = (temp = false) => {
  return localStorage.getItem("sigtoken") || sessionStorage.getItem("sigtoken") || "";
};
