import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ToastProvider from "@/providers/toast.provider";
import LoadingProvider from "@/providers/loading.provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SidebarProvider from "@/providers/sidebar.provider";
import ThemeProvider from "../providers/theme.provider";
import SettingProvider from "../providers/setting.provider";
import { ParallaxProvider } from "react-scroll-parallax";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          <ToastProvider>
            <LoadingProvider>
              <SettingProvider>
                <ParallaxProvider>
                  <Component {...pageProps} />
                </ParallaxProvider>
              </SettingProvider>
            </LoadingProvider>
          </ToastProvider>
        </SidebarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
