import express from 'express'
import { urlRoute } from './modules'
import { dbConfig, middlewareConfig } from './config'

const app = express()

const PORT = process.env.PORT || 3000

let db

if (process.env.NODE_ENV !== 'production') {
  db = 'mongodb://mongodb/url-short'
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
  console.info(`==> 🌎  ENV=${process.env.NODE_ENV}`)
  console.info(`==> ✅  Server is listening at http://localhost:${PORT}`)
})
