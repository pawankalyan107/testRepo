import mongoose from 'mongoose'
import '../mongodb/mongo.js'

const LOBSchema = new mongoose.Schema({
  category_name: String
})

export const Lob = mongoose.model('Lob', LOBSchema)
