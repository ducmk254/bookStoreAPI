require("dotenv").config();
const express     = require("express"),
      app         = express(),
      PORT        = process.env.PORT || 5000,
      mongoose    = require("mongoose"),
      bodyParser  = require("body-parser"),
      morgan      = require("morgan");
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,{useNewUrlParser:true,useUnifiedTopology:true})
              .then(()=>console.log("             connected to DB..."))
              .catch((err)=>{console.log('Loi; '+err);process.exit()})
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,()=>console.log(`Server is up on ${PORT} port...`));