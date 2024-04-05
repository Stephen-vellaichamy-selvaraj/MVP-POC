// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/tiny-slider.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <NextScript src="/js/bootstrap.min.js"></NextScript>
        <NextScript src="/js/glightbox.min.js"></NextScript>
        <NextScript src="/js/main.js"></NextScript>          
      </body>
    </Html>
  )
}