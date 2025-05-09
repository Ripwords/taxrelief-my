import { Elysia } from "elysia"
import { db } from "../database"
import cors from "@elysiajs/cors"
import serverTiming from "@elysiajs/server-timing"
import logixlysia from "logixlysia"

import { auth } from "../auth"

export const base = (conf: ConstructorParameters<typeof Elysia>[0]) =>
  new Elysia({
    ...conf,
  })
    .use(
      logixlysia({
        config: {
          showStartupMessage: true,
          timestamp: {
            translateTime: "yyyy-mm-dd HH:MM:ss",
          },
          ip: true,
          customLogFormat:
            "🦊 {now} {level} {duration} {method} {pathname} {status} {message} {ip}",
        },
      })
    )
    .use(serverTiming())
    .use(
      cors({
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    )
    .mount(auth.handler)
    .macro({
      auth: {
        async resolve({ error, request: { headers } }) {
          const session = await auth.api.getSession({
            headers,
          })

          if (!session) return error(401)

          return {
            user: session.user,
            session: session.session,
          }
        },
      },
    })
    .decorate("db", db)
