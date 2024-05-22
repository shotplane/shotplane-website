import { CrudRepository } from "../../servers/repo/crud.repo";
import { Network } from "./network.model";
import { NetworkFields } from "./network.field";
import { NetworkContractService } from "../networkContract/networkContract.repo";

export class NetworkRepository extends CrudRepository<Network> {
  apiName = "Network";

  shortFragment = this.parseFragment(`
    ${NetworkFields}
  `);

  fullFragment = this.parseFragment(`
    ${NetworkFields}

    contracts{
      ${NetworkContractService.fullFragment}
    }
  `);
}

export const NetworkService = new NetworkRepository();
