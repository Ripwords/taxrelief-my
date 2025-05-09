import swagger from "@elysiajs/swagger"
import { base } from "./utils/base"
import { OpenAPI } from "./auth"

const _app = base({
  name: "server",
})
  .use(
    swagger({
      documentation: {
        info: {
          title: "API Documentation",
          version: "1.0.0",
        },
        components: await OpenAPI.components,
        paths: await OpenAPI.getPaths(),
      },
    })
  )
  .group("/api", (app) => app.get("/", () => "Protected", { auth: true }))
  .get("/", () => "Hello Elysia")
  .listen(3000)

export type App = typeof _app
