import express from 'express'
import { routerUsers } from './routes/users.js'

export const app = express()
app.use(express.json())
app.use(routerUsers)
