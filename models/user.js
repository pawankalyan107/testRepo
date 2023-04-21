import mongoose from 'mongoose'
import '../mongodb/mongo.js'

const userSchema = new mongoose.Schema({
  firstname: String,
  email: String,
  dob: String,
  gender: String,
  city: String,
  address: String,
  state: String,
  zip: String,
  phone: String,
})

export const User = mongoose.model('User', userSchema)
