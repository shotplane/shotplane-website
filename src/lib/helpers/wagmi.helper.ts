import { defineChain } from "viem";
import { configureChains } from "wagmi";

import {
    polygon,
    polygonMumbai,
    bsc,
    bscTestnet,
    avalanche,
    celo,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

export const won = defineChain({
    id: 686868,
    name: "Won",
    network: "Won",
    nativeCurrency: {
        decimals: 18,
        name: "Won",
        symbol: "Won",
    },
    rpcUrls: {
        default: { http: ["https://rpc.wonnetwork.org"] },
        public: { http: ["https://rpc.wonnetwork.org"] },
    },
    blockExplorers: {
        etherscan: { name: "Won Explorer", url: "https://scan.wonnetwork.org" },
        default: { name: "Won Explorer", url: "https://scan.wonnetwork.org" },
    },
    testnet: false,
});

export const configChains = configureChains(
    [polygon, polygonMumbai, bsc, bscTestnet, avalanche, celo, won],
    [publicProvider()]
);