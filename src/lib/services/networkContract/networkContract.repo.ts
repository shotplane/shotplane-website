import { CrudRepository } from "../../servers/repo/crud.repo";
import { NetworkContract } from "./networkContract.model";
import { NetworkContractFields } from "./networkContract.field";

export class NetworkContractRepository extends CrudRepository<NetworkContract> {
  apiName = "NetworkContract";

  shortFragment = this.parseFragment(`
    ${NetworkContractFields}
  `);

  fullFragment = this.parseFragment(`
    ${NetworkContractFields}
  `);
}

export const NetworkContractService = new NetworkContractRepository();
