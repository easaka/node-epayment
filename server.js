if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
const express= require("express")

const app = express()
const stripePulicKey = process.env.STRIPE_PUBLIC_KEY
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
// console.log(stripeSecretKey,stripePulicKey);
app.set('view engine', 'ejs')

const fs = require('fs')

app.use(express.static('public'))

app.get("/store", (req,res)=>{
    fs.readFile('items.json', function(error,data){
        if (error) {
            res.status(500).end()
            // console.log(error);
        } else
            {
                res.render('store.ejs',{
                    stripePulicKey : stripePulicKey,
                    items: JSON.parse(data)
                })
            }
    })
})


app.listen('3000',)
