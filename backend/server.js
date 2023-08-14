const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const port = 3001


app.use(express.json())

const users= []

app.get('/users', (req, res) => {
    //res.send(req);
    res.json(users)
    
})

app.post('/users',async(req,res)=>{
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(req.body.password,salt)
    const user = {
        username : req.body.username,
        password : hash,
    }
    users.push(user)
    res.status(201).send()
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})