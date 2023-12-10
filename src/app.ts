import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user.routes'
const app: Application = express()

// parsers
app.use(cors())
app.use(express.json())

// application routes
app.use('/api', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to typescript-express-mongoose assignment',
  })
})

export default app
