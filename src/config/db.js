import mongoose from 'mongoose'

export default (config) => {
  mongoose.Promise = global.Promise
  mongoose.connect(config)
  mongoose.connection
    .once('open', () => console.log('MONGODB Connected'))
    .on('error', (err) => console.log('Error: ', err))
}
