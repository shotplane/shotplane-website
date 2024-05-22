import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ToastProvider from "@/providers/toast.provider";
import LoadingProvider from "@/providers/loading.provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig, createConfig } from "wagmi";
import SidebarProvider from "@/providers/sidebar.provider";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import ThemeProvider from "../providers/theme.provider";
import { configChains } from "../lib/helpers/wagmi.helper";
import FaucetProvider from "../providers/faucet.provider";
import SettingProvider from "../providers/setting.provider";
import AuthProvider from "../providers/auth.provider";
import WalletSelectProvider from "../providers/walletSelect.provider";
import NetworkProvider from "../providers/network.provider";

const { chains, publicClient, webSocketPublicClient } = configChains;

const config = createConfig({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          <FaucetProvider>
            <ToastProvider>
              <LoadingProvider>
                <SettingProvider>
                  <AuthProvider>
                    <WagmiConfig config={config}>
                      <WalletSelectProvider>
                        <NetworkProvider>
                          <Component {...pageProps} />
                        </NetworkProvider>
                      </WalletSelectProvider>
                    </WagmiConfig>
                  </AuthProvider>
                </SettingProvider>
              </LoadingProvider>
            </ToastProvider>
          </FaucetProvider>
        </SidebarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
