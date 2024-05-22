import { CrudRepository } from "../../servers/repo/crud.repo";
import { ClaimWallet } from "./claimWallet.model";
import { ClaimWalletFields } from "./claimWallet.field";
import { QueryOptions,MutationOptions } from "@apollo/client";

export class ClaimWalletRepository extends CrudRepository<ClaimWallet> {

  apiName = "ClaimWallet";

  shortFragment = this.parseFragment(`
    ${ClaimWalletFields}
  `);

  fullFragment = this.parseFragment(`
    ${ClaimWalletFields}
  `);


  async getMyClaimWallet(token: string) {
    const api = "getMyClaimWallet";
    const option: QueryOptions = {
      query: this.gql`query {  ${api} { ${this.fullFragment} }}`,
      fetchPolicy: "no-cache",
    };
    option.context = { headers: { "x-token": token } };
    return await this.apollo.query(option);
  }


  async getMyClaimableAmount(token: string) {
    const api = "getMyClaimableAmount";
    const option: QueryOptions = {
      query: this.gql`query {  ${api} {
        claimableAmount 
       }}`,
      fetchPolicy: "no-cache",
    };
    option.context = { headers: { "x-token": token } };
    return await this.apollo.query(option);
  }


  async claimMyBonus(token: string) {
    const api = "claimMyBonus";
    const option: MutationOptions = {
      mutation: this.gql`mutation {  ${api} { ${this.fullFragment} }}`,
      fetchPolicy: "no-cache",
    };
    option.context = { headers: { "x-token": token } };
    return await this.apollo.mutate(option);
  }
}

export const ClaimWalletService = new ClaimWalletRepository();