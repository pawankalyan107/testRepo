import mongoose from 'mongoose'
import '../mongodb/mongo.js'

const LOBSchema = new mongoose.Schema({
  category_name: String
})