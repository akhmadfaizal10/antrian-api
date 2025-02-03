import express from "express"
import dotenv from 'dotenv'
import { collection, getDocs, addDoc } from "firebase/firestore"
import { db } from "./firebase.js"

dotenv.config()

const app = express()
app.use(express.json())
// app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/data', async (req, res) => {
  const data = await getDocs(collection(db, 'antrian'))
  const antrian = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
  res.json(antrian)
})

app.post('/data', async (req, res) => {
  const data = req.body
  await addDoc(collection(db, 'antrian'), data)
  res.json(data)
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})


