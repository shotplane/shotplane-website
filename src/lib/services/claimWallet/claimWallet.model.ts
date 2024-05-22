import { BaseModel } from "../../models/base-model.model";


export enum ClaimWalletStatus {
    ACTIVE = "ACTIVE",
    DEACTIVED = "DEACTIVED",
}

export type CreateClaimWalletInput = {
    name?: string;
}

export type UpdateClaimWalletInput = {
    name?: string;
}

export enum ClaimWalletArgNames {
    name = "Name",
}

export enum ClaimWalletArgs {
    name = "name",
}

export interface ClaimWallet extends BaseModel {
    claimBalance?: number;
    unlockBalance?: number;
    refBalance?: number;
    customerId?: string;
    status?: ClaimWalletStatus;
}

export const ClaimWalletInitialValues: CreateClaimWalletInput = {
    name: "",
}