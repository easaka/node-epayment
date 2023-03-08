require('dotenv').config()
const express= require("express")

const app = express()
const stripePulicKey = process.env.STRIPE_PUBLIC_KEY
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
console.log(stripeSecretKey,stripePulicKey);
app.set('view engine', 'ejs')

app.use(express.static('public'))


app.listen('3000',)
