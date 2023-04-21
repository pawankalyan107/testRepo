import mongoose from 'mongoose'
import '../mongodb/mongo.js'

const userSchema = new mongoose.Schema({
  firstname: String,
  email: String,
  dob: String
})

userSchema.virtual('account', {
  ref: 'Account',
  localField: '_id',
  foreignField: 'owner'
})

export const User = mongoose.model('User', userSchema)