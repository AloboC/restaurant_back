import express from 'express'
import cors from 'cors'

const app = express()
app.disable('x-powered-by')

app.use(express.json())
app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = ['http://localhost:3000', 'https://www.example.com']

      if (ACCEPTED_ORIGINS.includes(origin)) return callback(null, true)
      if (!origin) return callback(null, true)
    }
  })
)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('!Hello World')
})

app.listen(port, () => {
  console.log(`application is running on port ${port}`)
})
