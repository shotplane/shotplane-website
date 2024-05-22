import { createContext, useContext, useState } from "react";
import { ChainCodes, Network } from "@/lib/services/network/network.model";
import { NetworkService } from "@/lib/services/network/network.repo";
import { useQuery } from "@tanstack/react-query";
import { useNetwork } from "wagmi";

const NetworkContext = createContext<
  Partial<{
    isLoading: boolean;
    networks: Network[];
    loadNetworks: any;
    currentNetwork?: Network;
    setToNetwork: any;
    toNetwork?: Network;
  }>
>({});

const NetworkProvider = (props: any) => {
  const [toNetwork, setToNetwork] = useState<Network>();

  const {
    isLoading,
    error,
    data: networks,
    refetch: loadNetworks,
  } = useQuery<Network[], Error>({
    queryKey: ["networks-data"],
    queryFn: () =>
      NetworkService.getAll({
        cache: false,
        query: {
          limit: 1000,
        },
        fragment: NetworkService.fullFragment,
      }).then((res) =>
        res.data.filter((item) =>
          [ChainCodes.celo, ChainCodes.won].includes(item.code)
        )
      ),
  });

  return (
    <NetworkContext.Provider
      value={{
        isLoading,
        networks,
        loadNetworks,
        setToNetwork,
        toNetwork,
      }}
    >
      {props.children}
    </NetworkContext.Provider>
  );
};

export default NetworkProvider;

export const useNetworks = () => useContext(NetworkContext);

export const useChain = (chainId?: number) => {
  const context = useContext(NetworkContext);
  const { networks } = context;
  const network = networks?.find((network) => network.chainNumber === chainId);

  return network;
};

export const useCurrentNetwork = () => {
  const context = useContext(NetworkContext);
  const { chain } = useNetwork();
  const { networks } = context;
  if (!chain) return null;
  if (!networks) return null;
  const currentNetwork = networks?.find(
    (network) => network.chainNumber === chain?.id
  );
  // console.log('currentNetwork',currentNetwork)
  return currentNetwork;
};

export const useNetworkContracts = () => {
  const currentNetwork = useCurrentNetwork();
  if (!currentNetwork) return null;
  return currentNetwork.contracts;
};
