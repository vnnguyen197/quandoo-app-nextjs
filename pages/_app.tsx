import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layouts from '@/components/layouts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layouts>
       <Component {...pageProps} />
    </Layouts>
    </>
  );
};

export default MyApp
