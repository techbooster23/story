import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Hello World!");
}); 

app.post("/",(req,res)=>{
    console.log(req.body.name);
    res.status(200);
    
});

app.listen(3000,()=>{
    console.log("app is running at port 3000");
    
})

