import { CrudRepository } from "../../servers/repo/crud.repo";
import { Faucet } from "./faucet.model";
import { FaucetFields } from "./faucet.field";

export class FaucetRepository extends CrudRepository<Faucet> {

  apiName = "Faucet";

  shortFragment = this.parseFragment(`
    ${FaucetFields}
  `);

  fullFragment = this.parseFragment(`
    ${FaucetFields}
  `);

}

export const FaucetService = new FaucetRepository();