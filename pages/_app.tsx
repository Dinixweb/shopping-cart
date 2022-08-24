import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import '../css/custom.min.css'
import Script from 'next/script';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
return<>
  <Script id='bootstrap-cdn' src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'>
  </Script>
  <Component {...pageProps} />

</>
}

export default MyApp