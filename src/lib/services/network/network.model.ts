import { BaseModel } from "../../models/base-model.model";
import { NetworkContract } from "../networkContract/networkContract.model";

export enum ChainCodes {
  won = "won",
  polygon = "polygon",
  polygonTestnet = "polygonTestnet",
  bsc = "bsc",
  bscTestNet = "bscTestnet",
  ganache = "ganache",
  ropsten = "ropsten",
  arbitrumRinkeby = "arbitrumRinkeby",
  arbitrum = "arbitrum",
  mintme = "mintme",
  celo = "celo",
  avax = "avax",
  coredao = "coredao",
  moonriver = "moonriver",
  harmony = "harmony",
  fantom = "fantom",
}

export enum Status {
  ACTIVE = "ACTIVE",
  DEACTIVE = "DEACTIVE",
}

export interface Network extends BaseModel {
  chainNumber?: number;
  status?: Status;
  code?: ChainCodes;
  network: {
    chainId?: string;
    chainName?: string;
    imgUrl?: string;
    nativeCurrency?: {
      name?: string;
      symbol?: string;
      decimals?: number;
    };
    rpcUrls?: string[];
    blockExplorerUrls?: string[];
  };

  minFaucetFee: number
  maxFaucetFee: number
  minDepositFee: number
  maxDepositFee: number
  minWithdrawFee: number
  maxWithdrawFee: number
  minGasFee: number
  maxGasFee: number

  contracts: NetworkContract[]
}
