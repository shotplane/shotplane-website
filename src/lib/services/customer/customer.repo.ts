import { CrudRepository } from "../../servers/repo/crud.repo";
import { Customer } from "./customer.model";
import { CustomerFields, CustomerQuery } from "./customer.field";
import { CustomerWalletType } from "../wallet/wallet.model";
import { MutationOptions, QueryOptions } from "@apollo/client";
import { fetchResultGeo } from "../../helpers/ip-address.helper";
import md5 from "md5";

export class CustomerRepository extends CrudRepository<Customer> {
  apiName = "Customer";

  shortFragment = this.parseFragment(`
    ${CustomerFields}
  `);

  fullFragment = this.parseFragment(`
    ${CustomerFields}
  `);

  loginByAddress = async ({
    address,
    walletType,
  }: {
    address: string;
    walletType: CustomerWalletType;
  }) => {
    const api = "loginByAddress";

    const geo = await fetchResultGeo();

    const option: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api}(
            address: "${address}",
            walletType:"${walletType}",
            addressIp:"${geo.IPv4}",
            ) {
            customer { ${CustomerQuery} }
            token
          }
        }
      `,
    };

    const result = await this.apollo.mutate(option);
    this.handleError(result);
    return result.data[api] as {
      customer: Customer;
      token: string;
    };
  };


  loginByGoogle = async ({
    idToken
  }: {
    idToken: string;
  }) => {
    const api = "loginByGoogle";
    const option: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api}(
            idToken: "${idToken}"
            ) {
            customer { ${CustomerQuery} }
            token
          }
        }
      `,
    };

    const result = await this.apollo.mutate(option);
    this.handleError(result);
    return result.data[api] as {
      customer: Customer;
      token: string;
    };
  };

  async customerGetMe(token: string, sigToken: string) {
    const api = "customerGetMe";
    const option: QueryOptions = {
      query: this.gql`query {  ${api} { ${this.fullFragment} }}`,
      fetchPolicy: "no-cache",
    };
    option.context = { headers: { "x-token": token, "s-token": sigToken } };
    return await this.apollo.query(option);
  }


  async addInvitationCode({
    invitationCode,
    token,
    sigToken
  }: {
    invitationCode: string;
    token: string,
    sigToken?: string;
  }) {
    const api = "addInvitationCode";
    const option: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api}(
            invitationCode: "${invitationCode.trim()}",
            ) {
              ${CustomerQuery}
            }
        }
      `,
      fetchPolicy: "no-cache",
    };
    option.context = { headers: { "x-token": token } };
    return await this.apollo.mutate(option);
  }


  async updateMyAddress({
    address,
    token,
    sigToken,
  }: {
    address: string;
    token: string;
    sigToken?: string;
  }) {
    const api = "updateMyAddress";
    const option: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api}(
            address:"${address.trim()}",
            ) {
              ${CustomerQuery}
            }
        }
      `,
      fetchPolicy: "no-cache",
    };
    option.context = { headers: { "x-token": token } };
    return await this.apollo.mutate(option);
  }


  async signupEmail({
    idToken,
    etoken,
  }: {
    idToken: string;
    etoken: string;
  }) {
    const api = "signupEmail";
    const option: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api}(
            idToken:"${idToken.trim()}",
            ) {
              ${CustomerQuery}
            }
        }
      `,
      fetchPolicy: "no-cache",
    };
    option.context = {
      headers: { "e-token": etoken },
    };
    return await this.apollo.mutate(option);
  }

  async getEmailAccessLink({
    token,
    sigToken,
  }: {
    token: string;
    sigToken?: string;
  }) {
    const api = "getEmailAccessLink";
    const option: MutationOptions = {
      mutation: this.gql`
        mutation {
          ${api} {
              href
            }
        }
      `,
      fetchPolicy: "no-cache",
    };
    option.context = { headers: { "x-token": token } };
    const result = await this.apollo.mutate(option);
    return result.data.getEmailAccessLink.href;
  }


  async getNumberRef(token: string) {
    const api = "getNumberRef";
    const option: QueryOptions = {
      query: this.gql`query {  ${api} { numberRef }}`,
      fetchPolicy: "no-cache",
    };
    option.context = { headers: { "x-token": token } };
    const result = await this.apollo.query(option);
    return result.data.getNumberRef.numberRef as number;
  }

}

export const CustomerService = new CustomerRepository();
