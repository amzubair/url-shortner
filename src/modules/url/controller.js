import Url from './model'
import { isURL } from 'validator'

export const createShort = (req, res) => {
  const { longUrl } = req.body

  if (!longUrl) return res.status(400).json({ error: 'You must provide a url' })
  if (!isURL(longUrl)) return res.status(400).json({ error: 'You must provide a valid url' })

  Url.findOne({ longUrl })
    .then(
    url => {
      if (!url) {
        const newUrl = new Url({ longUrl })
        return newUrl.save()
          .then(
          u => res.status(201).json({ error: null, data: u }),
          error => res.status(500).json({ error: error })
          )
      }
      return res.status(200).json({ data: url })
    },
    error => res.status(400).json({ error: error })
    )
}

export const redirectUrl = (req, res) => {
  const { url } = req.params

  Url.findOne({ shortUrl: url })
    .then(
    u => {
      if (u) {
        return res.redirect(`http://${u.longUrl}`)
      } else {
        return res.status(404).json({ message: 'Not Found' })
      }
    },
    error => res.statu(400).json({ error: error })
    )
}

export const home = (req, res) => {
  res.send('hello world from docker-compose!!!!')
}
