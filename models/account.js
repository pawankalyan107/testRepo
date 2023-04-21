import mongoose from 'mongoose'
import '../mongodb/mongo.js'

const accountSchema = new mongoose.Schema({
  account_name: String,
  account_type: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

export const Account = mongoose.model('Account', accountSchema)
