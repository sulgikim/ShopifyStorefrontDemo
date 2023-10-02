import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          <Header />
        </Head>
        <body className='h-screen'>
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}
