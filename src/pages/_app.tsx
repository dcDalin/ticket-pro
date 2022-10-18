import { NhostNextProvider } from '@nhost/nextjs';
import { NhostApolloProvider } from '@nhost/react-apollo';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

import 'nprogress/nprogress.css';
import '@/styles/globals.css';

import nhost from '@/lib/nhost';

import ModalWrapper from '@/components/modals/ModalWrapper';

import { wrapper } from '@/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
  }, []);

  return (
    <NhostNextProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <Component {...pageProps} />

        <ModalWrapper />
      </NhostApolloProvider>
    </NhostNextProvider>
  );
}

export default wrapper.withRedux(MyApp);
