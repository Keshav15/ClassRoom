const  express = require('express')
const app = express()
const port = 8080

app.use(express.json());




const userRoute=require("./routes/register");

app.use('/user',userRoute);

const classRoute=require("./routes/create");

const joinroute=require("./routes/join");

app.use('/user/create',classRoute);

app.use('/user/join',joinroute);

app.use((error,req,res,next)=>{
    console.log(error);
    const status=error.statusCode || 500;
    const message=error.message;
    const data=error.data;
    res.status(status).json({message:message,data:data});
})


const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Keshav:alliswell@cluster0.yl0hv.mongodb.net/Test?retryWrites=true&w=majority');
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log('mongodb Connected');
})

app.listen(port)