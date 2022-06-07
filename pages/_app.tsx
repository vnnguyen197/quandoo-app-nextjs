import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layouts from 'Layouts';
import SildeFind from '@/components/SlideFind';

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
