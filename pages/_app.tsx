import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
const connectors = {
  injected: {},
  magic: {
    apiKey: "pk_...", // Your magic api key
    chainId: 1, // The chain ID you want to allow on magic
  },
  walletconnect: {},
  walletlink: {
    appName: "thirdweb - demo",
    url: "https://thirdweb.com",
    darkMode: false,
  },
};
const supportedChainIds = [1, 4, 137];
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
