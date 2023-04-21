import express from 'express'
import csv from 'csvtojson'
import multer from 'multer'
import { User } from '../../models/user.js'
import { Account } from '../../models/account.js'
import { Policy } from '../../models/policy.js'

const router = new express.Router()
const upload = multer()

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const csvFile = req.file
    const jsonData = await csv().fromString(csvFile.buffer.toString())
    const data = await User.insertMany(jsonData)
    data.map((val, index) => {
      const userId = val['_id'].toString()
      jsonData[index]['owner'] = userId
    })
    const accountData = await Account.insertMany(jsonData)
    accountData.map((val, index) => {
      const accountId = val['_id'].toString()
      jsonData[index]['account'] = accountId
    })
    await Policy.insertMany(jsonData)
    res.json({ success: true })
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message });
  }
})

export { router }
