---
to: src/lib/services/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.model.ts
---
import { BaseModel } from "../../models/base-model.model";

export type Create<%= h.inflection.camelize(name) %>Input = {
    name?: string;
}

export type Update<%= h.inflection.camelize(name) %>Input = {
    name?: string;
}

export enum <%= h.inflection.camelize(name) %>ArgNames {
    name = "Name",
}

export enum <%= h.inflection.camelize(name) %>Args {
    name = "name",
}

export interface <%= h.inflection.camelize(name) %> extends BaseModel {
    name?: string;
}

export const <%= h.inflection.camelize(name) %>InitialValues: Create<%= h.inflection.camelize(name) %>Input = {
    name: "",
}