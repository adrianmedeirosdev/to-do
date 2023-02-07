import express from 'express'
import cors from 'cors'
import { StatusCodes } from 'http-status-codes'
import { Request, Response } from 'express'

const PORT = 3000

const corsOptions = {
  origin: 'http://localhost:5500',
  optionsSuccessStatus: StatusCodes.OK,
}
const app = express()

app.use(express.json())
app.use(cors(corsOptions))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})


app.listen(PORT)