import { BaseModel } from "../../models/base-model.model";


export enum TransactionEvent {
  UNKNOWN = "UNKNOWN",

  AIRDROP = "AIRDROP",

  PENDING_WITHDRAW = "PENDING_WITHDRAW",
  WITHDRAW = "WITHDRAW",

  WITHDRAW_TRANFER = "WITHDRAW_TRANFER",

  PENDING_DEPOSIT = "PENDING_DEPOSIT",
  DEPOSIT = "DEPOSIT",

  SEND_TOKEN = "SEND_TOKEN"
}


export enum CurrencyCodes {
  WON,
  BTC,
  BNB,
  CELO,
  AVAX,
  FTM,
  BRISE,
  MOVR,
  ETHW,
  CORE,
  FUSE,
  USDT,
}

export enum TransactionTypes {
  TOKEN = "TOKEN",
  NFT = "NFT",
  LP = "LP",
}

export enum TransactionStatus {
  CANCEL = "CANCEL",
  PENDING = "PENDING",
  APPROVAL_PENDING = "APPROVAL_PENDING", //
  CLAIMABLE = "CLAIMABLE",
  DONE = "DONE",
  ERROR = "ERROR"
}


export type Transaction = {
  id?: string

  fromTxHash?: string
  toTxHash?: string
  approvedTxHash?: string

  toBlockNumber?: number
  fromBlockNumber?: number

  price?: number
  value?: number
  weiValue?: number
  currency?: string

  type?: TransactionTypes
  status?: TransactionStatus
  event?: TransactionEvent

  customerId?: string
  fromAddress?: string

  receiverId?: string
  toAddress?: string

  fromContractId?: string
  fromContractAddress?: string
  fromContractCode?: string


  toContractId?: string
  toContractAddress?: string
  toContractCode?: string

  fromChainCode?: string
  fromChainNumber?: number
  fromNetworkId?: string

  toChainCode?: string
  toChainNumber?: number
  toNetworkId?: string
};



export type ITransaction = Transaction & BaseModel


export type SMTransactionInfo = {
  blockHash: string;
  blockNumber: number;
  cumulativeGasUsed: number;
  effectiveGasPrice: bigint;
  events: {
    Deposited: {
      // Define the structure for the 'Deposited' event
      // Assuming it has some properties, you need to replace the '...' with actual property names and types.
      // For example:
      amount: number;
      timestamp: string;
      // ...
    };
    // Add more event types if needed
  };
  from: string;
  gasUsed: number;
  logs: Array<{
    // Define the structure for each log entry
    // Assuming it has some properties, you need to replace the '...' with actual property names and types.
    // For example:
    logData: string;
    logIndex: number;
    // ...
  }>;
  logsBloom: string;
  status: number;
  to: string;
  transactionHash: string;
  transactionIndex: number;
  type: number;
};