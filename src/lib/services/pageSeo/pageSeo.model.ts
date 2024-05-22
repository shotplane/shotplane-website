import { BaseModel } from "../../models/base-model.model";

export enum SEOPages {
  HOME = "HOME",
  DEFI = "DEFI",
  UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION",
  LAUNCHPAD = "LAUNCHPAD",
  NFT_MARKETPLACE = "NFT_MARKETPLACE",
  STAKING = "STAKING",
  FARMING = "FARMING",
  P2P_EXCHANGE = "P2P_EXCHANGE",
  CROSS_CHAIN = "CROSS_CHAIN",
  LIVE_MARKET = "LIVE_MARKET",
  PAGE_404 = "PAGE_404",
  PAGE_500 = "PAGE_500",
  DASHBOARD = "DASHBOARD",
  PROFILE = "PROFILE",
  SECURITY = "SECURITY",
  APP = "APP",
  LOGS = "LOGS",
  INVENTORY = "INVENTORY",
  VEST = "VEST",
  SPORT = "SPORT",
  SWAP = "SWAP",
}

export interface PageSEO extends BaseModel {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  url?: string;
  seoPage?: SEOPages;
  image?: string;
  twitter?: string;
  facebook?: string;
  menuName?: string;
  menuUrl?: string;
}
