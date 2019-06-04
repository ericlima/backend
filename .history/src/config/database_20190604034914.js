const url = 'mongodb://localhost/card'

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

let options = {    
    server: {    
      auto_reconnect: true,    
      socketOptions: {
        keepAlive: 1,    
        connectTimeoutMS: 60000,    
        socketTimeoutMS: 60000,    
      }    
    },    
    replset: {    
      auto_reconnect: true,    
      socketOptions: {    
        keepAlive: 1,    
        connectTimeoutMS: 60000,    
       socketTimeoutMS: 60000,    
      }    
   }

  }

module.exports = mongoose.connect(url, options)

