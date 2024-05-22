import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export const networks = {
  ether: {
    chainId: `0x1`,
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.infura.io/v3/b3aa1154634149149ef4521b1d7161ee"],
    blockExplorerUrls: ["https://etherscan.io"],
  },
  ropsten: {
    chainId: `0x3`,
    chainName: "Ropsten Test Network",
    nativeCurrency: {
      name: "RopstenETH",
      symbol: "RopstenETH",
      decimals: 18,
    },
    rpcUrls: ["https://ropsten.infura.io/v3/b3aa1154634149149ef4521b1d7161ee"],
    blockExplorerUrls: ["https://ropsten.etherscan.io"],
  },

  polygonTestnet: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: [
      "https://matic-mumbai.chainstacklabs.com",
      "wss://ws-matic-mumbai.chainstacklabs.com",
    ],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  ganache: {
    chainId: `0x1691`,
    chainName: "Ganache",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545"],
    blockExplorerUrls: ["http://127.0.0.1:8545"],
  },
  arbitrumRinkeby: {
    chainId: `0x66eeb`, //421611
    chainName: "Arbitrum Rinkeby",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io/"],
  },

  bscTestnet: {
    chainId: `0x${Number(97).toString(16)}`,
    chainName: "BSC Testnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-testnet.public.blastapi.io"],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
  },

  arbitrum: {
    chainId: `0xa4b1`, //42161
    chainName: "Arbitrum ETH",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    blockExplorerUrls: ["https://arbiscan.io/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "BSC Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed1.binance.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  mintme: {
    chainId: `0x${Number(24734).toString(16)}`,
    chainName: "MintMe.com Coin",
    nativeCurrency: {
      name: "MintMe",
      symbol: "MINTME",
      decimals: 18,
    },
    rpcUrls: ["https://node1.mintme.com"],
    blockExplorerUrls: ["https://www.mintme.com"],
  },
  celo: {
    chainId: `0x${Number(42220).toString(16)}`,
    chainName: "Celo Mainnet",
    nativeCurrency: {
      name: "Celo",
      symbol: "CELO",
      decimals: 18,
    },
    rpcUrls: ["https://forno.celo.org"],
    blockExplorerUrls: ["https://celoscan.io"],
  },
  avax: {
    chainId: `0x${Number(43114).toString(16)}`,
    chainName: "Avalanche Network C-Chain",
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: ["https://avalanche-mainnet.infura.io"],
    blockExplorerUrls: ["https://snowtrace.io/"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
};

export const getChain = (networkId) => {
  const { utils } = require("ethers");
  var hex_chainId = utils.hexValue(networkId);
  console.log("hex_chainId :" + hex_chainId);
};

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const walletconnect = new WalletConnectConnector({
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: `https://bsc.getblock.io/testnet/?api_key=a7e56b96-dc5f-4815-9fe6-e14a4aed363c`,
  appName: "web3-react-demo",
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink,
};
//https://bridge.arbitrum.io/
