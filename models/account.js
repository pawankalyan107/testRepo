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

accountSchema.virtual('policy', {
  ref: 'Policy',
  localField: '_id',
  foreignField: 'account'
})

export const Account = mongoose.model('Account', accountSchema)
