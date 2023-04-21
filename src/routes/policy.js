import express from 'express'
import { Policy } from '../../models/policy.js'

const router = new express.Router()

router.post('/:id/policy', async (req, res) => {
  const accountId = req.params.id
  const userPolicy = new Policy({
    ...req.body,
    account: accountId
  })
  try {
    await userPolicy.save()
    res.status(200).send(userPolicy)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message });
  }
})

router.get('/user/:id/policies', async (req, res) => {
  const id = req.params.id
  try {
    const policies = await Policy.find({ owner: id })
    res.send(policies)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message });
  }
})

router.patch('/:id/policy/:policyId', async (req, res) => {
  const { id, policyId } = req.params
  const updates = Object.keys(req.body)
  const allowedUpdates = ['policy_type', 'premium_amount', 'policy_mode']
  const isValidUpdate = updates.every((update) => {
    return allowedUpdates.includes(update)
  })
  if (!isValidUpdate) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }
  try {
    const policy = await Policy.findOne({ _id: policyId, account: id })
    if (!policy) {
      return res.status(404).send()
    }
    updates.forEach((update) => policy[update] = req.body[update])
    await policy.save()
    res.status(200).send(policy)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message });
  }
})

router.get('/:id/policy', async (req, res) => {
  const accountId = req.params.id
  try {
    const data = await Policy.find({ account: accountId })
    res.status(200).send(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message });
  }
})

router.delete('/:accountId/policy/:policyId', async (req, res) => {
  const { accountId, policyId } = req.params
  try {
    const policy = await Policy.findOneAndDelete({ _id: policyId, account: accountId })
    if (!policy) {
      return res.status(404).send('Not Found')
    }
    res.send(policy)
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: error.message })
  }
})



export { router }