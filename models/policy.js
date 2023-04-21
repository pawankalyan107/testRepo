import mongoose from 'mongoose'
import '../mongodb/mongo.js'

const policySchema = new mongoose.Schema({
  policy_number: String,
  policy_mode: Number,
  policy_start_date: Date,
  policy_end_date: Date,
  policy_type: String,
  premium_amount: Number,
  premium_amount_written:  Number,
  hasActive_ClientPolicy: String,
  Applicant_ID: String,
  primary: String,
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  }
})

export const Policy = mongoose.model('Policy', policySchema);