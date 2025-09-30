const express=require('express');
const aiRoutes=require('./routes/ai.routes');
const cors=require('cors');
const app=express();
//middleware, if not used req.body will be undefined
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send(`Hello`);
})
app.use('/ai',aiRoutes);
module.exports=app;