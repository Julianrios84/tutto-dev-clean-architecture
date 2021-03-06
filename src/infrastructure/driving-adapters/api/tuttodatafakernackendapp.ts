import { Server } from './server'

export class TuttoDataFakerBackendApp {
  server?: Server

  async start (): Promise<void> {
    const port: string = process.env.PORT ?? '2426'
    this.server = new Server(port)
    return this.server.listen()
  }

  async stop (): Promise<void> {
    return this.server?.stop()
  }
}