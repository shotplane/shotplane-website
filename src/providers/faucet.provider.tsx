import { createContext, useContext, useEffect, useState } from "react";
import { getCustomerToken } from "../lib/services/customer/customer.model";

import { useLoader } from "./loading.provider";
import { FaucetService } from "../lib/services/faucet/faucet.repo";
import { Faucet, FaucetStatus } from "../lib/services/faucet/faucet.model";

const FaucetContext = createContext<
  Partial<{
    loadFaucets: any;
    result: Faucet[];
  }>
>({});

const FaucetProvider = (props: any) => {
  const [result, setResult] = useState<Faucet[]>([]);

  const loadFaucets = async ({ address }: { address: string }) => {
    try {
      const token = getCustomerToken(false);
      // console.log("token", token);
      if (token) {
        const result = await FaucetService.getAll({
          fragment: FaucetService.fullFragment,
          query: {
            filter: {
              address,
            },
            order: {
              _id: -1,
            },
          },
          token,
        });
        setResult(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FaucetContext.Provider
      value={{
        result,
        loadFaucets,
      }}
    >
      {props.children}
    </FaucetContext.Provider>
  );
};

export default FaucetProvider;

export const useFaucetProvider = () => useContext(FaucetContext);
