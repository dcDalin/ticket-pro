import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import 'nprogress/nprogress.css';
import '@/styles/globals.css';

import { wrapper } from '@/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default wrapper.withRedux(MyApp);
