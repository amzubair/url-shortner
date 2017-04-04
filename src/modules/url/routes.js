import { Router } from 'express'
import * as Url from './controller'

const urlRoute = new Router()

urlRoute.route('/api/v1/shorten').post(Url.createShort)
urlRoute.route('/:url').get(Url.redirectUrl)

export default urlRoute
