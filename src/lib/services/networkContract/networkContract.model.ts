import { BaseModel } from "../../models/base-model.model";
import { ChainCodes } from "../network/network.model";

export enum ContractCodes {
  won = "won",
  usdt = "usdt",
  deposit = "deposit",
  withdraw = "withdraw",
  bridge = "bridge",
  faucet = "faucet"
}

export enum ContractStatus {
  ACTIVE = "ACTIVE",
  DEACTIVE = "DEACTIVE",
}

export interface NetworkContract extends BaseModel {
  name?: string;
  code?: ContractCodes;
  contractAddress?: string;
  contractABI?: string;
  providerUrl?: string;
  chainCode?: ChainCodes;
  networkId?: string;
  status?: ContractStatus;
}
