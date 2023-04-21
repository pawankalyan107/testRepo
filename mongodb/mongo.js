import mongoose from 'mongoose'

// MongoDB configuration
const MONGO_URI = 'mongodb://127.0.0.1:27017/assessment-api'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})