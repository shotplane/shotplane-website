import { CrudRepository } from "../../servers/repo/crud.repo";
import { Transaction } from "./transaction.model";
import { TransactionFields, TransactionQuery } from "./transaction.field";
import { MutationOptions } from "@apollo/client";
import { getCustomerToken } from "../customer/customer.model";

export class TransactionRepository extends CrudRepository<Transaction> {
  apiName = "Transaction";

  shortFragment = this.parseFragment(`
    ${TransactionFields}
  `);

  fullFragment = this.parseFragment(`
    ${TransactionFields}
  `);

  prepareBridge = async ({
    value, currency, fromChainCode, toChainCode, receiver
  }: {
    value: number,
    currency: string,
    fromChainCode: string,
    toChainCode: string,
    receiver: string
  }) => {
    const api = "prepareBridge";

    const options: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api}(
            value: ${value},
            currency: "${currency}",
            fromChainCode: "${fromChainCode}",
            toChainCode: "${toChainCode}",
            receiver: "${receiver}"
          ) {
            ${TransactionQuery}
          }
        }
      `,
    };

    const token = getCustomerToken(false);
    if (!token) return;

    options.context = { headers: { "x-token": token } };

    const result = await this.apollo.mutate(options);
    this.handleError(result);
    return result.data[api] as Transaction;
  };

  submitBridge = async ({
    transactionHash, blockNumber, txId
  }: {
    transactionHash: string, blockNumber: number, txId: string
  }) => {
    const api = "submitBridge";

    const options: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api}(
            transactionHash: "${transactionHash}",
            blockNumber: "${blockNumber}",
            txId: "${txId}",
          ) {
            ${TransactionQuery}
          }
        }
      `,
    };

    const token = getCustomerToken(false);
    if (!token) return;

    options.context = { headers: { "x-token": token } };

    const result = await this.apollo.mutate(options);
    this.handleError(result);
    return result.data[api] as Transaction;
  };


  rejectBridge = async ({
    txId
  }: {
    txId: string
  }) => {
    const api = "rejectBridge";

    const options: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api}(
            txId: "${txId}",
          ) {
            ${TransactionQuery}
          }
        }
      `,
    };

    const token = getCustomerToken(false);
    if (!token) return;

    options.context = { headers: { "x-token": token } };

    const result = await this.apollo.mutate(options);
    this.handleError(result);
    return result.data[api] as Transaction;
  };


  prepareBridgeClaim = async ({
    txId
  }: {
    txId: string
  }) => {
    const api = "prepareBridgeClaim";

    const options: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api}(
            txId: "${txId}",
          ) {
            ${TransactionQuery}
          }
        }
      `,
    };

    const token = getCustomerToken(false);
    if (!token) return;

    options.context = { headers: { "x-token": token } };

    const result = await this.apollo.mutate(options);
    this.handleError(result);
    return result.data[api] as Transaction;
  };


  submitBridgeClaim = async ({
    transactionHash, blockNumber, txId
  }: {
    transactionHash: string, blockNumber: number, txId: string
  }) => {
    const api = "submitBridgeClaim";

    const options: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api}(
            transactionHash: "${transactionHash}",
            blockNumber: "${blockNumber}",
            txId: "${txId}",
          ) {
            ${TransactionQuery}
          }
        }
      `,
    };

    const token = getCustomerToken(false);
    if (!token) return;

    options.context = { headers: { "x-token": token } };

    const result = await this.apollo.mutate(options);
    this.handleError(result);
    return result.data[api] as Transaction;
  };

  rejectBridgeClaim = async ({
    txId
  }: {
    txId: string
  }) => {
    const api = "rejectBridgeClaim";

    const options: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api}(
            txId: "${txId}",
          ) {
            ${TransactionQuery}
          }
        }
      `,
    };

    const token = getCustomerToken(false);
    if (!token) return;

    options.context = { headers: { "x-token": token } };

    const result = await this.apollo.mutate(options);
    this.handleError(result);
    return result.data[api] as Transaction;
  };


}

export const TransactionService = new TransactionRepository();
