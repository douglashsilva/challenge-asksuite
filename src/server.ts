import express from "express"
import bodyParser from "body-parser"
import helmet from "helmet"
import { router } from "./routes"

export const app = express()
const port = process.env.PORT || 3500

app.use(bodyParser.json())
app.disable("x-powered-by")
app.use(helmet())

app.use("/", router)

export const server = app.listen(port)