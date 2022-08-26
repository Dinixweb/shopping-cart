import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../css/custom.min.css";
import Script from "next/script";
import { ContextProvider } from "../hooks/useContext";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/lib/integration/react";
import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      ></Script>
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading="" persistor={persistor}>
            <ContextProvider>
              <Component {...pageProps} />
            </ContextProvider>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </>
  );
}

export default MyApp;
