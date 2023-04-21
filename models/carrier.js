import mongoose from 'mongoose'
import '../mongodb/mongo.js'

const carrierSchema = new mongoose.Schema({
  company_name: String
})

export const Carrier = mongoose.model('Carrier', carrierSchema)
