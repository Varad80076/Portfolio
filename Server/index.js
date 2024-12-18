const express = require('express');
const app = express();
PORT = 4000;
app.use(express.json());


const cors =require('cors');
app.use(cors(
    {
        origin:["portfolio-varad-o70t5jpil-varad80076s-projects.vercel.app"],
        methods:['GET','POST'],
        credentials:true
    }
));

//mongoDb connection
const connectDB = require('./db/connection');
connectDB
console.log('mongoDB Connected');

//collection names
const contact = require('./models/Contact');

//post request fro contact collection
app.post("/", async(req,res) => {
    console.log("Server is Running")
    let contacts = new contact(req.body);
    let result = await contacts.save();
    res.send(result);
    
});


app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});
