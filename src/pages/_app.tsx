import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

import 'nprogress/nprogress.css';
import '@/styles/globals.css';

import apolloClient from '@/lib/apollo';

import ModalWrapper from '@/components/modals/ModalWrapper';

import { wrapper } from '@/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <ModalWrapper />
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
