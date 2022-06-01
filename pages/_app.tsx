import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import SildeFind from './SlideFind/component'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
       <Component {...pageProps} />
       <SildeFind/>
    </Layout>
  )
}

export default MyApp
