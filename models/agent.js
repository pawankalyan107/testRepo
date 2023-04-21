import mongoose from 'mongoose'
import '../mongodb/mongo.js'

const agentSchema = new mongoose.Schema({
  agent: String,
  agency_id: String,
  producer: String,
  csr: String
})

export const Agent = mongoose.model('Agent', agentSchema)
