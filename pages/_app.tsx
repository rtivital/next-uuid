import { SsrProvider } from "../components/SsrProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SsrProvider>
      <Component {...pageProps} />
    </SsrProvider>
  );
}
