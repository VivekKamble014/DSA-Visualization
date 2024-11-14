const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors"); // Corrected spelling from "cores" to "cors"
const UsersModule = require('./models/Users');

const app = express();
app.use(express.json());
app.use(cors()); // Corrected from "cores()" to "cors()"

app.post('/Login',(req,res)=>{
    const {email,password}= req.body;
    UsersModule.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password == password){
                res.json("Success")
            }else{
                res.json("The Password is incorrect")
            }
        }else{
            res.json("No record exist")
        }
    })
})
//mongodb://localhost:27017/
mongoose.connect("mongodb://127.0.0.1:27017/DSA-Visualization", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

app.post('/Signup', (req, res) => {
    // Corrected req.body to req.body
    UsersModule.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err)); // Return a 400 status for bad requests
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});