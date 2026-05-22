import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import analyzeRouter from './routes/analyze';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// for playwright to check if server is running
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.use('/analyze', analyzeRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})