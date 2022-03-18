import {getMirrorAdresses} from "./mirrors";
import fastify from "fastify"

import { createPageRenderer } from 'vite-plugin-ssr'
import {loadDotEnv} from "./load.env";
const path = require("path");

const isProduction = process.env.NODE_ENV === 'production'

async function startServer () {
  let fastOpt = {} as any
  const app = fastify(fastOpt)
  await app.register(require('fastify-express'))
  const root = path.resolve(`${__dirname}/..`)
  console.log({root})
  let viteDevServer


  if (isProduction) {
    console.log("in Production")
    app.register(require('fastify-static'), {
      root: `${root}/dist/client`,
      wildcard: false
    })
  } else {
    const vite = require('vite')
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: true },
    })
    app.use(viteDevServer.middlewares)
  }


  const renderPage = createPageRenderer({ viteDevServer, isProduction, root })

  app.get('*', async (req, res) => {
    const pageContextInit = {
      url: req.url,
    }
    const pageContext = await renderPage(pageContextInit)

    const { httpResponse } = pageContext
    if (httpResponse) {
      const {body, statusCode, contentType} = httpResponse
      res.status(statusCode).type(contentType).send(body)
    } else {
      res.send("Response empty",)
    }
  })


  const port = process.env.PORT as string

  // const server = https.createServer(certs, app).listen(port)
  await app.listen(port)

  console.log(`Server running at:\n`)
  getMirrorAdresses().forEach(ip=>{
    console.log(`http://${ip}:${port}`)
  })
  console.log("\n")
  return app
}

console.log(loadDotEnv())



export const viteNodeApp = startServer()

