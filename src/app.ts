import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static'

export const app = new Elysia().use(staticPlugin({
    assets: "./build/_next",
    prefix: "/_next"
}))
.get("/", () => Bun.file("./build/index.html"));