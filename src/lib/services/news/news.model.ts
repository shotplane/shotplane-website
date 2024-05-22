import { BaseModel } from "../../models/base-model.model";

export enum NewsStatus {
  ACTIVE = "ACTIVE",
  DEACTIVED = "DEACTIVED",
}

export type CreateNewsInput = {
    name?: string;
}

export type UpdateNewsInput = {
    name?: string;
}

export enum NewsArgNames {
    name = "Name",
}

export enum NewsArgs {
    name = "name",
}

export interface News extends BaseModel {
    name?: string;
    description?: string;
    content?: string
    status?: NewsStatus;
}

export const NewsInitialValues: CreateNewsInput = {
    name: "",
}