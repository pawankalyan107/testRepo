import express from 'express'
import bodyParser from 'body-parser'
import { router as uploadRouter } from './routes/upload.js'
import { router as userRouter } from './routes/user.js'
import { router as accountRouter } from './routes/account.js'
import { router as policyRouter } from './routes/policy.js'

const app = express()

app.use(bodyParser.json())
app.use(uploadRouter, userRouter, accountRouter, policyRouter)

app.listen(3001, () => {
  console.log('server is up on port ' + 3001)
})