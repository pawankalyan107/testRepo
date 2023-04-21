import express from 'express'
import mongoose from 'mongoose'
import { User } from '../../models/user.js'

const router = new express.Router()

router.post('/user', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()

    res.send(user)

  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message })
  }
})

router.get('/user/:id', async (req, res) => {
  const userId = req.params.id
  const ObjectId = mongoose.Types.ObjectId
  const _id = new ObjectId(userId)
  try {
    const user = await User.findById(_id)
    res.status(200).send(user)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message })
  }
})

router.patch('/user/:id', async (req, res) => {
  const userId = req.params.id
  const ObjectId = mongoose.Types.ObjectId
  const _id = new ObjectId(userId)
  try {
    await User.findByIdAndUpdate(_id, req.body)
    const user = await User.findOne({ '_id': userId })
    res.send(user)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message })
  }
})

router.delete('/user/:id', async (req, res) => {
  const userId = req.params.id
  try {
    const user = await User.findOneAndDelete({ _id: userId })
    res.send(user)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message })
  }
})

export { router }