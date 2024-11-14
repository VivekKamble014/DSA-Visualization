const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
            firstName : String,
              lastName : String,
              occupation : String,
              email:String,
              password: String
})

const UsersModule = mongoose.model("Userss",UsersSchema)
module.exports = UsersModule