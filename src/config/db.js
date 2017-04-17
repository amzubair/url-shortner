import mongoose from 'mongoose'

export default (db) => {
  mongoose.Promise = global.Promise
  mongoose.connect(db)
  mongoose.connection
    .once('open', () => console.info(`==> 📁  Connected to Database ${db}`))
    .on('error', (err) => console.log('Error: ', err))
}
