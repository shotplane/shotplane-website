import { BaseModel } from "../../models/base-model.model";

export type CreateFaucetInput = {
    name?: string;
}

export type UpdateFaucetInput = {
    name?: string;
}

export enum FaucetArgNames {
    name = "Name",
}

export enum FaucetArgs {
    name = "name",
}

export enum FaucetStatus {
    ACTIVE = "ACTIVE",
    DEACTIVED = "DEACTIVED",
}

export interface Faucet extends BaseModel {
    address?: string;
    customerId?: string;
    status?: FaucetStatus;
}

export const FaucetInitialValues: CreateFaucetInput = {

}