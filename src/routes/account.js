import express from 'express'
import { Account } from '../../models/account.js'


const router = new express.Router()

router.post('/:id/account', async (req, res) => {
  const userId = req.params.id
  const userAccount = new Account({
    ...req.body,
    owner: userId
  })
  try {
    await userAccount.save()
    res.status(200).send(userAccount)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message });
  }
})

router.patch('/:id/account/:accountId', async (req, res) => {
  const { id, accountId } = req.params
  const updates = Object.keys(req.body)
  const allowedUpdates = ['account_name', 'account_type']
  const isValidUpdate = updates.every((update) => {
    return allowedUpdates.includes(update)
  })
  if (!isValidUpdate) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }
  try {
    const account = await Account.findOne({ _id: accountId, owner: id })
    if (!account) {
      return res.status(404).send()
    }
    updates.forEach((update) => account[update] = req.body[update])
    await account.save()
    res.status(200).send(account)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message });
  }
})

router.get('/:id/account', async (req, res) => {
  const userId = req.params.id
  try {
    const data = await Account.find({ owner: userId })
    res.status(200).send(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message });
  }
})

router.delete('/:id/account/:accountId', async (req, res) => {
  const { id, accountId } = req.params
  try {
    const account = await Account.findOneAndDelete({ _id: accountId, owner: id })
    if (!account) {
      return res.status(404).send('Not Found')
    }
    res.send(account)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message })
  }
})

export { router }