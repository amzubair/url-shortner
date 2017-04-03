import express from 'express'
import { urlRoute } from './modules'
import { dbConfig, middlewareConfig } from './config'

const app = express()

const PORT = process.env.PORT || 3000

let db

if (process.env.NODE_ENV !== 'production') {
  db = 'mongodb://localhost:3001/url-short'
} else {
  db = process.env.MONGO_URL
}

// database configuration
dbConfig(db)

// middleware configuration
middlewareConfig(app)


app.use([urlRoute])

app.listen(PORT, (err) => {
  if (err) return console.error(err)
  console.log(`Application running on port ${PORT}`)
})

