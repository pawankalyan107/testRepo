import express from 'express'
import multer from 'multer'
import csv from 'csvtojson'
import { Data } from '../models/data.js'

const app = express()
const upload = multer()

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const csvFile = req.file
    const jsonData = await csv().fromString(csvFile.buffer.toString())
    await Data.insertMany(jsonData)

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message });
  }
})

app.listen(3001, () => {
  console.log('server is up on port ' + 3001)
})