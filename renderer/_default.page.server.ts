import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'

import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import {readFileSync} from "fs";
import {PageContext} from "./usePageContext";
export const passToClient = ['pageProps']

const packageJson = readFileSync('./package.json')
const {name} = JSON.parse(packageJson.toString())


export async function render(pageContext: PageContextBuiltIn & PageContext) {
  const title = pageContext?.title || name

  const sw = __IS_PROD ? '<script src="/sw.js"></script>' : ""

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta title="${title}">                
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />      
        <meta name="description" content="Your app description">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="alternate icon" href="/favicon.ico" type="image/png" sizes="16x16">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
        <link rel="mask-icon" href="/favicon.svg" color="#FFFFFF">
        ${dangerouslySkipEscape(sw)}
        <meta name="theme-color" content="#ffffff">        
        <link href="/quasar.prod.css" rel="stylesheet" type="text/css">               
                                   
      </head>
      <body>
        <div id="app"></div>
      </body>
    </html>`
  return {
    documentHtml,
    // pageContext: {
    //   // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    // },
  }
}

// export const prerender= ()=>['/about']