import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layouts from '@/components/layouts';
import SildeFind from 'features/components/SlideFind';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layouts>
       {/* <Component {...pageProps} /> */}
       <SildeFind/>
    </Layouts>
    </>
  );
};

export default MyApp
