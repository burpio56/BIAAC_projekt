const config = require('config')
const app = require('./src/app')

const port = process.env.PORT || config.get('feedmail.port')
