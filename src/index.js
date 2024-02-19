import express from 'express'
import { corsMiddleware } from './middlewares/cors.js'
// import { readJsonFile } from './utils/index.js'

import { moviesRouter } from './routes/movies.js'

const app = express()
app.disable('x-powered-by')

// middlewares
app.use(express.json())
app.use(corsMiddleware())

// routes
app.use('/api', moviesRouter)

// const file = readJsonFile('movies.json')
// console.log(file)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`application is running on port ${port}`)
})
