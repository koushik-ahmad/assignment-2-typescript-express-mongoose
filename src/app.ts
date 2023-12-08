import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

// parsers
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to typescript-express-mongoose assignment',
  })
})

export default app
