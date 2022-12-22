import "../styles/globals.css";
import { TreeContextProvider } from "../context/tree.context";

export default function App({ Component, pageProps }) {
  return (
    <TreeContextProvider {...pageProps}>
      <Component {...pageProps} />
    </TreeContextProvider>
  );
}
