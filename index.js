const mongoose = require("mongoose");
const express=require("express");
const app=express();
const cors=require("cors");
const userroute=require("./routes/customer");
const tranxroute=require("./routes/tranx");
//IDJI0kwAxApsQI2y
//mongodb+srv://sujeeth:<password>@cluster0.yrhyj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


//DB Connection
mongoose
  .connect(process.env.MONGODB_URI||"mongodb+srv://sujeeth:IDJI0kwAxApsQI2y@cluster0.yrhyj.mongodb.net/bankdb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  }).catch(()=>{
      console.log("failed to connect db");
  });
  
  app.use(cors());
  app.use(express.json());                      //mw  express->[routes]->error
 
  app.use('/api', userroute);
  app.use('/api', tranxroute);

//PORT
const port = process.env.PORT || 8000;

if(process.env.NODE_ENV=="production"){
  app.use(express.static("bank-frontend/build"))
}

//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});